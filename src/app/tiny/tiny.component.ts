import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
declare const tinymce: any;

@Component({
  selector: 'app-tiny',
  imports: [],
  templateUrl: './tiny.component.html',
  standalone: true,
  styleUrl: './tiny.component.css'
})
export class TinyComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit() {
    tinymce.init({
      selector: 'div#mytextarea',
      content_css: 'styles.css',
      height: 900,
      plugins: [
        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image',
        'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks',
        'wordcount'
      ],
      statusbar: false,
      toolbar: 'undo redo | blocks fontsizeinput | bold italic underline strikethrough code | link image media table mergetags | addcomment showcomments | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat |',
      content_style: "body {background-color: #e7eef7; line-height: 1.4; font-family: 'K2D', sans-serif; font-size: 17px; }",
      default_font_stack: ['Georgia'],
      font_family_formats: "Courier New=courier new,courier,monospace; K2Dl=K2D,sans-serif; Georgia=georgia,palatino; Times New Roman=times new roman,times; Verdana=verdana,geneva;",
    });
  }
}
