import { Component, OnInit } from '@angular/core';
import {IAlbum} from "../../../models/albums/IAlbum";
import {AlbumsService} from "../../../services/albums/albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums : IAlbum[]

  constructor(private albumServices : AlbumsService) { }

  ngOnInit(): void {
    this.albumServices.getAllAlbums().subscribe(value => this.albums = value)
  }

}
