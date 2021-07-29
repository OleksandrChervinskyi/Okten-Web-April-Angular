import {AlbumDetailsComponent} from "../../components";
import {AlbumsGuardsService} from "../../services/albums/albums-guards.service";

export const AlbumRouteChildrens = {
  path: 'albums/:id',
  component: AlbumDetailsComponent,
  canActivate : [AlbumsGuardsService]
}
