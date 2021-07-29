import {AlbumsComponent} from "../../components/albums-wrap/albums/albums.component";
import {AlbumsGuardsService} from "../../services/albums/albums-guards.service";

export const AlbumsRoute = {
  path: 'albums',
  component: AlbumsComponent,
  canDeactivate : [AlbumsGuardsService]
}

