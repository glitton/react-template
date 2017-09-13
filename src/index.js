// const { createElement } = React Don't need this
const { render } = ReactDOM
// Don't need this
// const style = { 
//   backgroundColor: 'pink',
//   color: 'black',
//   fontFamily: 'verdana'
// }
// Don't need this bec of JSX
// const title = createElement(
//   'h1',
//   {id: 'title', className: 'header', style: style},
//   'Hello Osay! You are Awesome!'
// ) 

render(
  <h1 id='title'      
      className='header'
      style={{backgroundColor:'pink', color: 'black', fontFamily: 'verdana'}}>
    Hello Osay! You will get the job that yo want!  
  </h1>,
  document.getElementById('react-container')
)
