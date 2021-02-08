import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';
import { DataStorageService } from '../services/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedNavegator = new EventEmitter<string>();
  expand = false;
  constructor(private dataStorageService: DataStorageService, public authservice: AuthServiceService, private router: Router ) { }

  ngOnInit() {
  }

changeNavigate(Nav: string)
{
      this.selectedNavegator.emit(Nav);
}

toggleDDL()
{
  this.expand = !this.expand;
}

SaveData()
{
  const ss = this.dataStorageService.storeRecipes().subscribe(
  (response: Response) => {
    console.log(response);
  }
  );
}

GetData()
{
  this.dataStorageService.getRecipes();
}
Logout()
{
 this.authservice.LogOut();
 this.router.navigate(['SignIn']);
}
}
