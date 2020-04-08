import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kkb-users',
  templateUrl: './kkb-users.component.html',
  styleUrls: ['./kkb-users.component.scss'],
})
export class KkbUsersComponent implements OnInit {
  value: string = '';
  users: Array<string> = [];
  constructor() {}

  ngOnInit(): void {}

  addUser(): void {
    if (!!this.value) {
      if (!this.users.includes(this.value)) {
        this.users = [...this.users, this.value];
        this.value = '';
      } else {
        window.alert('Teka lang! May kapangalan ang dinagdag mo. Dapat wala.');
      }
    }
  }

  removeUser(user: string): void {
    this.users = this.users.filter((u) => u !== user);
  }
}
