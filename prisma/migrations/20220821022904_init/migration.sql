-- CreateTable
CREATE TABLE "Players" (
    "id" TEXT NOT NULL,
    "nome" TEXT,
    "imagem" TEXT NOT NULL DEFAULT 'chapolin.jpg',
    "forca" INTEGER NOT NULL DEFAULT 0,
    "habilidade" INTEGER NOT NULL DEFAULT 0,
    "resistencia" INTEGER NOT NULL DEFAULT 0,
    "armadura" INTEGER NOT NULL DEFAULT 0,
    "poderdefogo" INTEGER NOT NULL DEFAULT 0,
    "pontosdevida" INTEGER NOT NULL DEFAULT 0,
    "pontosdemagia" INTEGER NOT NULL DEFAULT 0,
    "pontosdeexperiencia" INTEGER NOT NULL DEFAULT 0,
    "nivel" INTEGER NOT NULL DEFAULT 1,
    "dinheiro" INTEGER NOT NULL DEFAULT 0,
    "tipodedano" TEXT,
    "magiasconhecidas" TEXT,
    "items" TEXT,
    "vantagens" TEXT,
    "racas" TEXT,
    "desvantagens" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jogadores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "forca" INTEGER NOT NULL DEFAULT 0,
    "habilidade" INTEGER NOT NULL DEFAULT 0,
    "resistencia" INTEGER NOT NULL DEFAULT 0,
    "armadura" INTEGER NOT NULL DEFAULT 0,
    "poderdefogo" INTEGER NOT NULL DEFAULT 0,
    "pontosdevida" INTEGER NOT NULL DEFAULT 0,
    "pontosdemagia" INTEGER NOT NULL DEFAULT 0,
    "pontosdeexperiencia" INTEGER NOT NULL DEFAULT 0,
    "dinheiro" INTEGER NOT NULL DEFAULT 0,
    "tipodedano" TEXT,
    "magiasconhecidas" TEXT,
    "items" TEXT,
    "vantagens" TEXT,
    "racas" TEXT,
    "desvantagens" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jogadores_pkey" PRIMARY KEY ("id")
);
