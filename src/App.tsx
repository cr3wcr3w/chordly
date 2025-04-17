import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "./shared/components/shadcn/button";

function App() {
	const [greetMsg, setGreetMsg] = useState("");
	const [name, setName] = useState("");

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
		setGreetMsg(await invoke("greet", { name }));
	}

	return (
		<main>
			<h1>Welcome to Tauri + React</h1>

			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" alt="Vite logo" />
				</a>
				<a href="https://tauri.app" target="_blank" rel="noreferrer">
					<img src="/tauri.svg" alt="Tauri logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} alt="React logo" />
				</a>
			</div>
			<p>Click on the Tauri, Vite, and React logos to learn more.</p>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					greet();
				}}
			>
				<input
					id="greet-input"
					onChange={(e) => setName(e.currentTarget.value)}
					placeholder="Enter a name..."
				/>
				<Button type="submit" variant="link">
					Greetdew
				</Button>
			</form>
			<p>{greetMsg}</p>
			<p className="bg-red-900">tailwind</p>
		</main>
	);
}

export default App;
