import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { HelperService } from '../services/helper/helper.service';
import { ApiService } from '../services/api/api.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {


  title: string = 'chatapp';

  showFiller: boolean = false;
  users: Array<any>;
  public messages: Array<any> = [] 
  temp: any; 
  showMessages = false; 
  message: string = ''; 

  userFilter ={name:''};

  constructor(
    private helper: HelperService,
     private router: Router,
    private _scrollToService: ScrollToService,
    public api: ApiService) { }
  showChat = true;

  ngOnInit() {
    this.getAllUsers() 
  }


  getAllUsers() {
    this.api.setCurrentUser(localStorage.getItem('uid')) 
    this.api.getUsers().pipe(
      map(actions => {
       
        return actions.map(a => {
          let data = a.payload.doc.data();
          let id = a.payload.doc.id;
          return {...data}
        })
      })
    ).subscribe(data => {
      console.log('all users', data)
        this.users = data.filter((item)=>{
          let find = this.api.currentUser.conversations.find(el => el.uid == item.uid);
          if(!find){
            return item;
          }     
        })        
        console.log('the users',this.users)
    })
}


  open(list) {
    this.helper.openDialog(list)

  }


  logoutModal(c) {
    this.helper.openDialog(c)
  }

  logout() {
    this.api.clearData()
    this.router.navigate(['/login']).then(() => this.helper.closeModal())
  }


  closeModal() {
    this.helper.closeModal()
  }




  async selectUser(user) {
    try {
      this.helper.closeModal()
    } catch (e) { console.log(e) }

    if (this.api.currentUser.conversations == undefined || this.api.currentUser.conversations == null ) {
      //means user has no conversations.
      this.api.currentUser.conversations = [];
    }
    //add if convo not empty
    let convo = [...this.api.currentUser.conversations]; 
    let find = convo.find(item => item.uid == user.uid); 
    if (find) { 
      this.api.getChat(find.chatId).subscribe(m => {
        this.temp = m;
        this.api.chat = this.temp[0];
        this.messages = this.api.chat.messages == undefined ? [] : this.api.chat.messages
        this.showMessages = true;
        setTimeout(() => {
          this.triggerScrollTo()
        }, 1000);
        return
      })
    } else {
      
      this.api.addNewChat().then(async () => { 
      
        let b = await this.api.addConvo(user); 
      })

    }
  }

  /* Sending a  Message */
  sendMessage() {
    // If message string is empty
    if (this.message == '') {
      alert('Enter message');
      return
    }
    //set the message object 
    let msg = {
      senderId: this.api.currentUser.uid,
      senderName: this.api.currentUser.name,
      timestamp: new Date(),
      content: this.message
    };
    //empty message
    this.message = '';
    //update 
    this.messages.push(msg);
    console.log('list', this.messages);
    this.api.pushNewMessage(this.messages).then(() => {
      console.log('sent');
    })
  }

  //Scroll to the bottom 
  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'destination'
    };
    this._scrollToService.scrollTo(config);
  }

  // Firebase Server Timestamp
  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }




}
