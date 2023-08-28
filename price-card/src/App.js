import './App.css';
import Data from './Components/data';
import Cards from './Components/cards';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
      <div className="container-fluid pt-3 pb-5">
        <h1 className="text-center mb-3">Pricing Table</h1>
        <div className="row">
          <div className="col">
            <section className="pricing py-5">
              <div className="container">
                <div className="row">
                  {Data.map((card) => {
                    return (
                      <>
                        <Cards
                          popularPlans={card}
                          key={card}
                        />
                      </>
                    )
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;