import '!style-loader!css-loader!sass-loader!./test-styling.scss';

const sitePackDecorator = (story: any) => {

  // other irrelevant stuff

  return {
    components: { story },
    template: '<story />'
  }
}
  ;

export { sitePackDecorator }