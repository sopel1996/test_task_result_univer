interface TotalPriceOptions {
    price: number;
    discount?: number;
    isInstallment?: boolean;
    months?: number;
  }
  
  const totalPrice = ({
    price,
    discount = 0,
    isInstallment,
    months = 12,
  }: TotalPriceOptions): number => {
    if (discount > 1) {
      discount = discount / 100;
    }
  
    const discountedPrice = price - price * discount;
    const result = isInstallment ? discountedPrice / months: discountedPrice;
  
    return Math.round(result);
  };
  
  const total = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }); // 6250
  console.log(total);


  //task 2
  const posts = [
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
  
  interface INormalized<T> {
    byId: {[key: string]: T}
    allIds: string[]
  };
  
  const normalizeData = <T extends { id: string }>(unnormalizedData: T[]): INormalized<T> => {
    const byId = unnormalizedData.reduce<INormalized<T>['byId']>((data, item) => {
        data[item.id] = item;
        return data;
      }, {});
    const allIds = unnormalizedData.map((item) => item.id);
    
    return { byId, allIds };
  };
  
  console.log(normalizeData(posts));


//task 3

  const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
};

const getData = <T>(url: string): Promise<T> => {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      return res.json();
    });
};

getData<IComment[]>(COMMENTS_URL)
	.then(data => {
    data.forEach(({ id, email }) => {
      console.log(`ID: ${id}, Email: ${email}`);
    });
  });
