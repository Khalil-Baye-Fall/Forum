import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeaturesServiceService } from '../features-service.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {

  model: any = {};
  list_topics: any = {};
  topic_list: any = [];
  counter: Array<number> = [];
  

  constructor(
    private featService: FeaturesServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.Topic_List();
  }

  Topic_Create(){
    this.featService.CreateTopic(this.model).then(
      data => {
        console.log(data);
        window.location.reload();

      },
      err => {
        console.log(err);
      }
    )
  }

  Topic_List(){
    this.featService.GetTpoics().then(
      data => {
        console.log(data);

        this.list_topics = data;
        // console.log(this.list_topics);
        for(var i = 0; i < this.list_topics.length; i++) {
          this.topic_list.push(this.list_topics[i].name);
          
          // console.log(this.topic_list);
          this.counter.push(i);
          // console.log(this.counter)
        }
      },
      err => {
        console.log(err);
      }
      
      )
  }

}
