import FormularioProducto from "./components/FormularioProducto";
import Auth from "./components/Auth";
import Storage from "./components/Storage";

function App() {
  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">

              <h2 className="text-center mb-0">
                Tienda React
              </h2>

            </div>

            <div className="card-body">

              <FormularioProducto />

            <Auth />
            
            <hr />

            <Storage />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;