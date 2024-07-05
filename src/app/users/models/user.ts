export class User{
    id: number;
    name: string;
    emailid: string;
    phone_no: string;
    age: number;
    address: string;

constructor(user?)
{
this.id = user?.id;
this.name = user?.name;
this.emailid = user?.emailid;
this.phone_no = user?.phone_no;
this.age = user?.age;
this.address = user?.address;

}


}