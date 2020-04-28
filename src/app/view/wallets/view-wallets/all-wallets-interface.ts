import { User } from 'src/app/shared/model/user/user-model';
import { Wallet } from 'src/app/shared/model/wallet/wallet-model';

export interface IAllWallets {
  id: number;
  name: any;
  admin: User;
  email: string;

}

export class PopulateAllWalletsTable {

  public static displayedColumns: string[] = [
    'WalletNo',
    'WalletName',
    'Admin',
    'Email',

  ];


  public  static populateTableOnInit(fromResponse: Wallet[]) {
    
    console.log("the un seeeen",fromResponse )

    return fromResponse.map(e => {

      return  {
        id: e.id,
        name: e.name,
        admin: e.user.name,
        email: e.user.email
      };

    });
  }

}
 