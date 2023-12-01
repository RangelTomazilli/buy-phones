
export default function Home() {
  return (
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.tsx</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    <main className='container text-center py-4 d-flex flex-column align-items-center'>
      <h2 className='text-primary-emphasis fw-semibold'>Venda seu smartphone sem sair de casa!</h2>
      <div className='w-50'>
        <p className='text-secondary fw-semibold'>Selecione as especificações e condições do aparelho e descubra quanto vale o seu usado hoje. A gente coleta seu aparelho diretamente na sua casa (sujeito a restrição de região).</p>
      </div>
      <div className='w-50 shadow pt-5 p-3 bg-body-tertiary rounded text-start'>
        <h4 className='text-secondary fw-semibold mb-4'>Selecione as especificações do seu celular para saber o valor que pagaremos!</h4>
        <select className="form-select form-select-lg mb-3" aria-label="Large select example">
          <option selected>Selecione a marca</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select className="form-select form-select-lg mb-3" aria-label="Large select example">
          <option selected>Selecione o modelo</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <span className="mb-2">Memória interna:</span>
        <div className="d-flex gap-2 mb-3">
          <div>
            <input type="radio" className="btn-check" name="options" id="option1" />
            <label className="btn btn-primary" htmlFor="option1">512GB</label>
          </div>
          <div>
            <input type="radio" className="btn-check" name="options" id="option2" />
            <label className="btn btn-primary" htmlFor="option2">256GB</label>
          </div>
          <div>
            <input type="radio" className="btn-check" name="options" id="option4" />
            <label className="btn btn-primary" htmlFor="option4">64GB</label>
          </div>
        </div>
        <span className="mb-2">Cor:</span>
        <div className="d-flex gap-2 mb-5">
          <div>
            <input type="radio" className="btn-check" name="options1" id="option3" />
            <label className="btn btn-primary" htmlFor="option3">Azul</label>
          </div>
          <div>
            <input type="radio" className="btn-check" name="options1" id="option5" />
            <label className="btn btn-secondary" htmlFor="option5">Cinza</label>
          </div>
          <div>
            <input type="radio" className="btn-check" name="options1" id="option6" />
            <label className="btn btn-success" htmlFor="option6">Verde</label>
          </div>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-lg btn-success">Próximo</button>
        </div>
      </div>
    </main>
  )
}
