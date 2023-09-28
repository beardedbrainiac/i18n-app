import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from 'src/app/shared/services/translation-service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent {
  
  constructor(
    private route: ActivatedRoute,
    private translationService: TranslationService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.translationService.init();

    this.route.queryParams
    .subscribe(params => {
      if (params.hasOwnProperty("lang")) {
        this.translationService.setLanguage(params["lang"]);
      }
    }
  );    
  }

  changeLanguage(lang: string) {
    this.translationService.setLanguage(lang);
  }

}
