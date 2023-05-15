<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.postcss';

	const skills: {[skill: string]: { name: string, content: string }} = {
		// Languages
		java: {
			name: "Java",
			content: "I am an intermediate java developer"
		},
		python: {
			name: "Python",
			content: "I am an intermediate python developer"
		},
		cpp: {
			name: "",
			content: ""
		},
		js: {
			name: "",
			content: ""
		},
		html: {
			name: "",
			content: ""
		},
		css: {
			name: "",
			content: ""
		},
		// Industry
		agile: {
			name: "",
			content: ""
		},
		github: {
			name: "",
			content: ""
		},
		cicd: {
			name: "",
			content: ""
		},
		slack: {
			name: "",
			content: ""
		},
		// Tools
		aws: {
			name: "",
			content: ""
		},
		linux: {
			name: "",
			content: ""
		},
		wsl: {
			name: "",
			content: ""
		},
		docker: {
			name: "",
			content: ""
		},
		zsh: {
			name: "",
			content: ""
		},
		// Frameworks
		svelte: {
			name: "",
			content: ""
		},
		springboot: {
			name: "",
			content: ""
		},
		flask: {
			name: "",
			content: ""
		},
		fastpages: {
			name: "",
			content: ""
		},
		quarto: {
			name: "",
			content: ""
		}
	}


	onMount(() => {
		
	})
</script>



<slot />
