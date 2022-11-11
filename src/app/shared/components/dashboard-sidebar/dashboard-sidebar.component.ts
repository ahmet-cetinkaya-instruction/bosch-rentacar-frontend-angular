import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSidebarComponent implements OnInit {
  menuItems = [
    {
      title: 'Brands',
      children: [
        {
          title: 'Add Brand',
          link: '/dashboard/brands/add',
        },
      ],
    },
    {
      title: 'Models',
      children: [
        {
          title: 'Add Model',
          link: '/dashboard/models/add',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
