import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardRouteGuard: CanActivateFn = (route, state) => {
  let Route = inject(Router)

  if(localStorage.getItem('Token')!= null){
    return true;
  }
  else{
    Route.navigate(['/Login'])
    return false
  }
};
