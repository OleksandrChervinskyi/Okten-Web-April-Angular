import {AlbumDetailsComponent} from "../../components/albums-wrap/album-details/album-details.component";
import {AlbumsGuardsService} from "../../services/albums/albums-guards.service";

export const AlbumRouteChildrens = {
  path: 'albums/:id',
  component: AlbumDetailsComponent,
  canActivate : [AlbumsGuardsService]
}
