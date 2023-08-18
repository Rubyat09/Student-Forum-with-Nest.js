import { Student } from './student.entity';
export declare class Moderator {
    id: number;
    name: string;
    age: string;
    phone: string;
    email: string;
    gender: string;
    createdDate: Date;
    updatedDate: Date;
    education: string;
    profileImg: string;
    password: string;
    status: string;
    createdBy: number;
    students: Student[];
}
