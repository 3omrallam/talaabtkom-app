import { Routes } from "@angular/router";
import { AllReservationsBlockComponent } from "../blocks/reservations-blocks/all-reservations-block/all-reservations-block.component";
import { CanceledReservationsBlockComponent } from "../blocks/reservations-blocks/canceled-reservations-block/canceled-reservations-block.component";
import { CompleteReservationsBlockComponent } from "../blocks/reservations-blocks/complete-reservations-block/complete-reservations-block.component";
import { CurrentReservationsBlockComponent } from "../blocks/reservations-blocks/current-reservations-block/current-reservations-block.component";

// [User Reservation] Route
export const userReservationRouter: Routes = [
    { path: '', component: AllReservationsBlockComponent },
    { path: 'current', component: CurrentReservationsBlockComponent },
    { path: 'completed', component: CompleteReservationsBlockComponent },
    { path: 'canceled', component: CanceledReservationsBlockComponent },
]