function CurriculoButton() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../../public/pdf/samuel_allyson.pdf'; // Caminho para o PDF
        link.download = 'samuel_allyson.pdf'; // Nome do arquivo que será baixado
        link.click();
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <button
                className="btn btn-lg py-3 px-5 text-white bg-primary "
                onClick={handleDownload}
            >
                Currículo
            </button>
        </div>
    );
}

export default CurriculoButton;