import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { QuizItem } from './quiz-item';
import * as shuffleArray from 'shuffle-array';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  quizItems: QuizItem[] = [];
  currentIndex: number = 0;
  currentScore: number = 0;
  highScore: number = 0;
  currentImagePath : string;
  currentQuestions: string[] = [];
  quizPossibleAnswers:string[] = [
    'a-minor',
    'b-minor',
    'c-minor',
    'd-minor',
    'e-minor',
    'f-minor',
    'g-minor',
    'a-major',
    'b-major',
    'c-major',
    'd-major',
    'e-major',
    'f-major',
    'g-major',
  ];

  constructor(public navCtrl: NavController,
              private storage: NativeStorage,
              private alertCtrl: AlertController) {
    this.initializeQuiz();
    this.generateChoices();
  }

  initializeQuiz(): void {
    const question1 = new QuizItem("a-minor", "assets/imgs/Chords/a_minor_quiz.png");
    const question2 = new QuizItem("b-minor", "assets/imgs/Chords/b_minor_quiz.png");
    const question3 = new QuizItem("c-minor", "assets/imgs/Chords/c_minor_quiz.png");
    const question4 = new QuizItem("d-minor", "assets/imgs/Chords/d_minor_quiz.png");
    const question5 = new QuizItem("e-minor", "assets/imgs/Chords/e_minor_quiz.png");
    const question6 = new QuizItem("f-minor", "assets/imgs/Chords/f_minor_quiz.png");
    const question7 = new QuizItem("g-minor", "assets/imgs/Chords/g_minor_quiz.png");
    const question8 = new QuizItem("a-major", "assets/imgs/Chords/a_major_quiz.png");
    const question9 = new QuizItem("b-major", "assets/imgs/Chords/b_major_quiz.png");
    const question10 = new QuizItem("c-major", "assets/imgs/Chords/c_major_quiz.png");
    const question11 = new QuizItem("d-major", "assets/imgs/Chords/d_major_quiz.png");
    const question12 = new QuizItem("e-major", "assets/imgs/Chords/e_major_quiz.png");
    const question13 = new QuizItem("f-major", "assets/imgs/Chords/f_major_quiz.png");
    const question14 = new QuizItem("g-major", "assets/imgs/Chords/g_major_quiz.png");
    this.quizItems.push(question1);
    this.quizItems.push(question2);
    this.quizItems.push(question3);
    this.quizItems.push(question4);
    this.quizItems.push(question5);
    this.quizItems.push(question6);
    this.quizItems.push(question7);
    this.quizItems.push(question8);
    this.quizItems.push(question9);
    this.quizItems.push(question10);
    this.quizItems.push(question11);
    this.quizItems.push(question12);
    this.quizItems.push(question13);
    this.quizItems.push(question14);
    shuffleArray(this.quizItems);
  }
  ionViewDidLoad() {
    this.currentImagePath = this.quizItems[this.currentIndex].imagePath;
    this.storage.getItem('hs').then(hs => {
      if(typeof hs !=='undefined' &&  hs !== null) {
        this.highScore = hs;
      }
    }).catch(err => {
      console.log(err);
    });
  }

  answerToQuestion(answer: string): void {
    if(answer === this.quizItems[this.currentIndex].answer) {
      this.currentScore+=10;
      this.currentQuestions = [];
      this.setNewHighScore();
      if(this.currentScore === 140){
        this.currentScore = 0;
        this.currentIndex = 0;
        this.alertCtrl.create({
          title: 'Congratulations',
          subTitle: 'You got a perfect score',
          buttons: ['ok']
        }).present();
        this.quizItems = [];
        this.initializeQuiz();
        this.generateChoices();
        this.currentImagePath = this.quizItems[this.currentIndex].imagePath;
      }
      else {

        this.currentIndex++;
        this.currentImagePath = this.quizItems[this.currentIndex].imagePath;
        this.generateChoices();
      }
      return;
    }
    this.alertCtrl.create({
      title: 'It\'s ok',
      subTitle: 'Just keep on learning',
      buttons: ['ok']
    }).present();
    this.currentIndex = 0;
    this.currentScore = 0;
    this.currentQuestions = [];
    this.quizItems = [];
    this.initializeQuiz();
    this.generateChoices();
    this.currentImagePath = this.quizItems[this.currentIndex].imagePath;
  }


  generateChoices(): void {
    this.currentQuestions.push(this.quizItems[this.currentIndex].answer);
    for(let i =0; i < 3;i++ ) {
      let choice = Math.floor((Math.random() * this.quizItems.length) + 0);
      const correctAnswer = this.quizItems[this.currentIndex].answer;
      let choiceAnswer = this.quizItems[choice].answer;
      while (correctAnswer === choiceAnswer) {
        choice = Math.floor((Math.random() * this.quizItems.length) + 0);
        choiceAnswer = this.quizItems[choice].answer;
      }
      this.currentQuestions.push(choiceAnswer);
    }
    shuffleArray(this.currentQuestions);
  }

  setNewHighScore(): void {
    if(this.currentScore > this.highScore) {
      this.highScore = this.currentScore;
      this.storage.setItem('hs', this.currentScore.toString()).catch(()=>console.log('asd'));
    }
  }

}


