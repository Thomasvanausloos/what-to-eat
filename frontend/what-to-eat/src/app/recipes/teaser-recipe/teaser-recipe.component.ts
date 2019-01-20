import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teaser-recipe',
  templateUrl: './teaser-recipe.component.html',
  styleUrls: ['./teaser-recipe.component.css']
})
export class TeaserRecipeComponent implements OnInit {
  @Input() teaserTitle;
  @Input() teaserSubtitle;
  @Input() recipe;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateToRecipeDetail() {
    this.router.navigate(['detail', this.recipe.id]);
  }
}
