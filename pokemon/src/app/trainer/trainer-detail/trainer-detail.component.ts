import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataTrainers } from '../dataTrainers'; 

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css']
})
export class TrainerDetailComponent implements OnInit {
  trainerDetail: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const trainerId = this.route.snapshot.paramMap.get('id'); 
    if (trainerId) {
      this.trainerDetail = dataTrainers.find(trainer => trainer.id === Number(trainerId));
    }
  }
}

