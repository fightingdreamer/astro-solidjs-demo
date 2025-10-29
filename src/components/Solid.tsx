import { actions } from 'astro:actions';
import { createSignal } from 'solid-js'

export default function CharacterName() {
  const [result, setResult] = createSignal("");

  async function onClick() {
    const { data, error } = await actions.getGreeting({ name2: "Houston" });
    if (data) setResult(data);
  }

  return (
    <>
      <button onClick={onClick}>Get greeting</button>
      <pre>{result()}</pre>
    </>
  );
}
