import logo from "./logo.svg";
import { useState } from 'react'

function App() {

  // React HOOKS
  // Array of todos, 
  const [todos, setTodos] = useState([{ id: 1, title: 'tugas 1', desc: 'jam 2' }])
  //capture input dari form desc
  const [desc, setDesc] = useState('');


  // HANDLING FUNCTION

  // function handleSubmit()

  // function handleTodoData()

  return (
		<div>
			<div className="flex justify-center">
				<div className="px-10 pt-5 bg-gray-200 pb-5 w-9/12">
					<h1 className="text-lg font-sans font-bold flex">Forum Saham</h1>

					<form >
            {/* FORM BUAT TITLE */}

						{/* FORM BUAT DESC */}
						<label className="flex flex-col border-black mt-5">
							<span className="text-gray-700 self-start">Deskripsi</span>
							<input
								value={desc}
								onChange={(e) => setDesc(e.target.value)}
								type="text"
								className="form-input mt-1 shadow-md rounded-md block w-full h-10  px-2"
							/>
						</label>

            {/* SUBMIT BUTTON */}
						
					</form>

          {/* LIST TODO  */}
					<div className="border py-4 mt-5 space-y-3">
						{todos.map((todo) => {
							return (
                <div
                  key={todo.id}
                  className="border border-black w-full">
                  {/* TITLE */}
                  <p className="font-bold text-lg">{todo.title}</p>
                  
                  {/* DESC  */}
									<p className="text-grey-darker mb-2 "> {todo.desc}</p>
                  
                  {/* DELETE BUTTON*/}
            
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
