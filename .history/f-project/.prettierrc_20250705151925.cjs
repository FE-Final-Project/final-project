module.exports = {
  arrowParens: 'always', // 화살표 함수의 매개변수에 항상 괄호를 사용
  htmlWhitespaceSensitivity: 'css', // HTML 파일에서 공백 처리를 CSS의 white-space 규칙에 따라 처리
  bracketSameLine: false, // JSX 태그에서 닫는 >를 다음 줄로 내림
  bracketSpacing: true, // 객체 리터럴에서 중괄호 {} 안에 공백을 추가
  printWidth: 60, // 한 줄의 최대 길이를 60자로 제한. 이를 초과하면 줄바꿈이 발생
  proseWrap: 'preserve', // Markdown 파일에서 텍스트 줄바꿈을 원본 그대로 유지
  quoteProps: 'as-needed', // 객체 속성에 따옴표를 필요한 경우에만 사용
  semi: true, // 문장의 끝에 세미콜론(;)을 항상 추가
  singleQuote: true, // 문자열에 항상 작은따옴표(')를 사용
  tabWidth: 2, // 들여쓰기에서 탭의 크기를 2칸으로 설정
  trailingComma: 'es5', // ES5에서 유효한 경우, 마지막 요소 뒤에 쉼표를 추가
  /* 예: 
  const arr = [
    1,
    2,
  ]; 
  */
  useTabs: false,
};
