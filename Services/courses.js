import { request, gql } from 'graphql-request'
const graphqlAPI = 'https://api-ap-south-1.graphcms.com/v2/cl4pi5ws021o501z47bqt6x9h/master'
export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    course {
      title
      link
      description
      image {
        url
      }
    }
    event {
      title
      link
      description
      timeDate
      image {
        url
      }
    }
  }
  
    
      
      
    `
  const result = await request(graphqlAPI, query)
  return(
    result.course
    
  ) 

 
}