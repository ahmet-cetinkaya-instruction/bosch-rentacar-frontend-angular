import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSidebarComponent implements OnInit {
  //: @Input() ile gelen değerler, parent component tarafından yeniden set edildiğinde/bellek adresi değiştiğinde
  //: değişiklikleri o an kontrol ediliyor. (3. Yöntem)
  @Input() dashboardTitle: string = 'Welcome';

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

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.changeDashboardTitle();
  }

  changeDashboardTitle(): void {
    setTimeout(() => {
      this.dashboardTitle = 'Dashboard';
      // ...
      // ...
      //: OnPush change detection strategy'ini kullanıyorsak, değişiklikleri elle bildirmemiz gerekiyor. (1. Yöntem)
      this.changeDetectorRef.markForCheck();
    }, 5000);
  }

  onMenuItemClick(groupName: string): void {
    //: HTML tarafında bir event tetiklendiğinde, değişiklikler o an kontrol ediliyor. (2. Yöntem)
    this.dashboardTitle = groupName;
  }
}
