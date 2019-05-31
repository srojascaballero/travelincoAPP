import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LugarPage } from '../lugar/lugar.page';
import { ElArteEnTuPielPage } from '../el-arte-en-tu-piel/el-arte-en-tu-piel.page';

@Component({
  selector: 'app-select-experience',
  templateUrl: './select-experience.page.html',
  styleUrls: ['./select-experience.page.scss'],
})
export class SelectExperiencePage implements OnInit {

  public date = '';
  public hour = '';

  constructor() { }

  ngOnInit() {
  }

}
