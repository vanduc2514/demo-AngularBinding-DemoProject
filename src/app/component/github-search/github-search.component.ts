import {Component, OnInit} from '@angular/core';
import {GithubService} from '../../service/github.service';
import {ISingleRepo} from '../../model/github';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  result: Array<ISingleRepo>;
  count: number;

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
  }

  searchGithub(keyword: string): void {
    this.githubService.findByKeyword(keyword).subscribe(next => {
      this.count = next.total_count;
      this.result = next.items;
    });
  }
}
