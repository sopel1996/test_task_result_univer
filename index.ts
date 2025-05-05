interface PriceOptions {
    price: number;
    discount?: number;
    isInstallment: boolean;
    months?: number;
}

const totalPrice = ({ price, discount = 0, isInstallment, months = 0  } : PriceOptions) : number => {
    let res = price;
    if (discount){
        res *= (1-(discount / 100));
    }
    if (isInstallment && months){
        res /= months
    }

    return res;
};

//task 2

interface Post {
    id: string,
    title: string,
    body: string
}
interface ById {
    [key: string]: Pick<Post, 'id' | 'title' | 'body'> 
}
interface NormalizedPosts {
    byId: ById;
    allIds: string[];
  }

const posts: Post[] = [
    {
      id: '62e69d5a5458aac0ed320b35',
      title: 'id labore ex et quam laborum',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium'
    },
    {
      id: '62e69d5a5458aac0ed320b1c',
      title: 'quo vero reiciendis velit similique earum',
      body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et'
    },
    {
      id: '62e69d5a5458aac0ed320b32',
      title: 'odio adipisci rerum aut animi',
      body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione'
    },
    {
      id: '62e69d5a5458aac0ed320b39',
      title: 'alias odio sit',
      body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
    },
    {
      id: '62e69d5a5458aac0ed320b53',
      title: 'vero eaque aliquid doloribus et culpa',
      body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et'
    },
    {
      id: '62e69d5a5458aac0ed320b19',
      title: 'et fugit eligendi deleniti quidem qui sint nihil autem',
      body: 'doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in'
    },
    {
      id: '62e69d5a5458aac0ed320b25',
      title: 'repellat consequatur praesentium vel minus molestias voluptatum',
      body: 'maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor'
    }
  ];
  
const normalizeData = (unnormalizedData: Post[]) : NormalizedPosts => {

    const byId: ById = {};
  const allIds: string[] = [];

  posts.forEach(post => {
    byId[post.id] = { id: post.id, title: post.title, body: post.body };
    allIds.push(post.id);
  });

  return { byId, allIds };
};
  
  console.log(normalizeData(posts));
  /**
   * {
   *    byId: {
   *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
   *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
   *      ...
   *    },
   *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
   * }
   */




  const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

  interface Comment {
    body: string,
    email: string,
    id: number,
    name: string,
    postId: number
  }

const getData = async (url : string) : Promise<Comment[]> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data: Comment[] = await response.json();
        return data;
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
        return [];
      }
    
}

getData(COMMENTS_URL)
.then(data => {
    data.forEach(comment => {
      console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    });
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */