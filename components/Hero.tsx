"use client"
import { TypeAnimation } from 'react-type-animation';

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";

SyntaxHighlighter.registerLanguage("typescript", typescript);

export const Hero = () => {
    const content = `// Welcome to Aziz Becha's TypeScript Playground 🚀
interface Developer {
  name: string;
  role: string;
  passions: string[];
  code: string[];
}

const me: Developer = {
  name: 'Aziz Becha',
  role: 'Software Developer 👩‍💻',
  passions: ['coding 💻', 'reading 📚', 'learning 💡'],
  code: ['TypeScript', 'React', 'React Native', 'Arduino'],
};

// About Me
console.log(\`Hello, curious mind! I'm \${me.name}, a \${me.role}.\`);

// Thank you for visiting!
console.log('Thanks for exploring my TypeScript playground! 🚀');`;

    return (
        <div className="mt-5">
            <h1 className="hero-title text-main font-ubuntu font-bold text-5xl mb-5">
                <TypeAnimation
                    sequence={["Hey! I'm Aziz Becha 🚀", 1000]}
                    speed={50}
                    repeat={Infinity}
                    cursor
                    className='hero-title font-ubuntu text-main font-bold text-5xl mb-8'
                />
            </h1>
            <SyntaxHighlighter
                language="typescript"
                style={oneDark}
                className="mockup-phone w-full text-md border-4 rounded-xl border-transparent animated-border"
                showLineNumbers
                useInlineStyles
                showInlineLineNumbers
            >
                {content.trim()}
            </SyntaxHighlighter>
            <p className='text-center mt-4 italic'>*sorry for the weird ui, i&apos;m busy fixing database bugs*</p>
        </div>
    );
}