'use client'

import Card from "../Features/Card";

const Home = ({features}) => {
    return (
        <div>
              <div className='py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    features?.map(card => <Card key={card.id} card={card}></Card>)
                }

            </div>
        </div>
    );
};

export default Home;