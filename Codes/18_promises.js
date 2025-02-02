function greet( name, callback){
    console.log('Hello ' + name);
    callback();
}

function goodbye(){
    console.log('Goodbye');
}
greet("Alice", goodbye);

function fetchData(callback){
  console.log('Fetching data');
  setTimeout(() => {
    callback('Data fetched');
  }, 2000);
}

function processData(data){
  console.log(data);
}

fetchData(processData);