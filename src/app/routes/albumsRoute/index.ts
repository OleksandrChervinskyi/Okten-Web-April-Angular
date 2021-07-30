import {AlbumsComponent} from "../../components";
import {AlbumsGuardsService} from "../../services/albums/albums-guards.service";

export const AlbumsRoute = {
  path: 'albums',
  component: AlbumsComponent,
  canDeactivate : [AlbumsGuardsService]
}

