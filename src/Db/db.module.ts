import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { Comment } from './comment.entity';
import { Hr } from './hiring.entity';
import { Job } from './job.entity';
import { Moderator } from './moderator.entity';
import { Offer } from './offer.entity';
import { Post } from './post.entity';
import { Report } from './report.entity';
import { Student } from './student.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Admin,
      //Comment,
      Hr,
      Job,
      Moderator,
      //Offer,
      Post,
      //Report,
      Student,
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class DbModule {}
