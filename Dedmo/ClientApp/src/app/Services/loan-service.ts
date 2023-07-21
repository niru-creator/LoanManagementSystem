import { Injectable } from "@angular/core";
// import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

@Injectable()
export class LoanService {
    // public hubConnectionBuilder: HubConnection;
    offers: any[] = [];
    public RoleName: string = null;
    public UserName: string = null;
    constructor() {
    }
    // LoanServiceNotification(): any {
    //     this.hubConnectionBuilder = new HubConnectionBuilder()
    //         .withUrl('https://localhost:44325/api/MessageHub/Notification')
    //         .configureLogging(LogLevel.Information)
    //         .build();
    //     this.hubConnectionBuilder
    //         .start()
    //         .then(() => console.log('Connection started.......!'))
    //         .catch(err => console.log('Error while connect with server'));
    //     this.hubConnectionBuilder.on('SendOffersToUser', (result: any) => {
    //         this.offers.push(result);
    //     });
    //     return this.offers;

    // }
}