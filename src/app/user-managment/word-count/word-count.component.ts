import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-word-count',
  templateUrl: './word-count.component.html',
  styleUrls: ['./word-count.component.css']
})
export class WordCountComponent implements OnChanges {
  @Input() text: string = '';
  wordCounts: { word: string; count: number }[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['text']) {
      this.countWords(this.text);
    }
  }

  private countWords(text: string) {
    const words = text.split(/\s+/);
    const wordMap: { [key: string]: number } = {};
    words.forEach(word => {
      word = word.toLowerCase();
      wordMap[word] = (wordMap[word] || 0) + 1;
    });
    this.wordCounts = Object.keys(wordMap).map(key => ({ word: key, count: wordMap[key] }));
  }
  
}
