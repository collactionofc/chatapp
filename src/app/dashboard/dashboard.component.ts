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
  alluserFilter={name:''};

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
    let id;
    this.api.getUsers().pipe(
      map(actions => {
       
        return actions.map(a => {
          let data = a.payload.doc.data();
          id = a.payload.doc.id;
          return {...data}
        })
      })
    ).subscribe(data => {
      console.log('all users', data)
        this.users = data.filter((item)=>{
          let find = this.api.currentUser.conversations.find(el => el.uid == item.uid);
          console.log("comman find",find)
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
      
      this.api.currentUser.conversations = [];
    }
    
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

  
  sendMessage() {
    
    if (this.message == '') {
      alert('Enter message');
      return
    }
  
    let msg = {
      senderId: this.api.currentUser.uid,
      senderName: this.api.currentUser.name,
      image:this.api.currentUser.image,
      timestamp: new Date(),
      content: this.message
    };
  
    this.message = '';
  
    this.messages.push(msg);
    console.log('list', this.messages);
    this.api.pushNewMessage(this.messages).then(() => {
      console.log('sent');
    })
  }

  
  public triggerScrollTo() {
    const config: ScrollToConfigOptions = {
      target: 'destination'
    };
    this._scrollToService.scrollTo(config);
  }

  
  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }




}
