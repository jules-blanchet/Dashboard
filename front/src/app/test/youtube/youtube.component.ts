import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Youtube} from '../../shared/models/youtube.model';
import {ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({

  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})

export class YoutubeComponent implements OnInit {
  
  @Input() videoId: string
  ngOnInit() {
    this.fetchYoutube()
  }
  
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
  }
  youtube = new Youtube("","");
  api_key = "&key=AIzaSyC_gILDjh_f1dZ0kGgrbZRAeJLAYPVqZ2Q"
  request = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id="

  async getYoutube(id: string): Promise<Youtube> {
    let object = await this.httpClient.get(this.request + id + this.api_key).toPromise();
    this.youtube.viewCount = JSON.parse(JSON.stringify(object))['items'][0]['statistics']['viewCount']
    this.youtube.videoId = JSON.parse(JSON.stringify(object))['items'][0]['id']

    return this.youtube;
  }

  fetchYoutube = async () => {
    await this.getYoutube(this.videoId).then((res) => {

      this.youtube = res;
    });
  };

}
