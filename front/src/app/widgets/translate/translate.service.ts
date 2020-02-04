import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TranslateService {
  private apiKey: string;


  constructor(private httpClient: HttpClient) {
    this.apiKey = 'trnsl.1.1.20191113T134112Z.e5baf1696e6aff80.2548e959bbcbab60571c21197efa50786363aa63';
  }

  async getTranslation(text: string, lang: string): Promise<string> {
    const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate' +
      '?key=' + this.apiKey +
      '&text=' + text +
      '&lang=' + lang;
    const textTranslated = await this.httpClient.get(url).toPromise();
    if (textTranslated['text']) {
      return textTranslated['text'][0];
    }
    return 'Error';
  }
}

