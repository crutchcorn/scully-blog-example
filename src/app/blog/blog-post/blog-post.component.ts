import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { combineLatest } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private scully: ScullyRoutesService
  ) {}

  $blogPostMetadata = combineLatest([
    this.activatedRoute.params.pipe(pluck('postId')),
    this.scully.available$
  ]).pipe(
    map(([postId, routes]) =>
      routes.find(route => route.route === `/blog/${postId}`)
    )
  );
}
