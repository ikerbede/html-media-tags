import { Route } from '@angular/router';
import { AudioComponent } from './audio/audio.component';
import { PictureComponent } from './picture/picture.component';
import { VideoComponent } from './video/video.component';

export const MEDIA_ROUTES: Route[] = [
  { path: 'audio', component: AudioComponent },
  { path: 'picture', component: PictureComponent },
  { path: 'video', component: VideoComponent },
];
