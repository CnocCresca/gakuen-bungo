const skillTextData = {
    /* SSR */
    モルグ街の黒猫: {
        name: "モルグ街の黒猫",
        text: (object) => `2秒間、範囲内の自身の味方2体に対してのダメージを無効化し、8秒間、1.5秒毎に最大体力の${object.interval_healPercent}自然治癒する。`,
        pt: 200,
        range: 600,
    },
    人上人不造: {
        name: "人上人不造",
        text: (object) =>
            `12秒間、自身の被ダメージを${object.decreaseDamage}%減少させる。12秒間、範囲内の自身以外の櫻眞學園所属の味方全員に対し、攻撃力を${object.ATK_up}上昇、威圧を${object.knock_up}上昇、攻撃頻度を${object.attackSpan_up}を短縮させる。`,
        pt: 450,
        range: 2000,
    },
    外套: {
        name: "外套",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性ヰ能ダメージを与え、自身の最大体力の${object.healPercent}%回復する。`,
        pt: 240,
        range: 400,
    },
    "危ないですよ～！": {
        name: "危ないですよ～！",
        text: (object) =>
            `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性ヰ能ダメージを、12秒間、攻撃頻度を${object.attackSpan_down}%延長、移動速度を${object.speed_down}%減少させる。`,
        pt: 260,
        range: 500,
    },
    雪中梅: {
        name: "雪中梅",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性ヰ能ダメージを、8秒間、自身の命中を${object.accuracy_up}%上昇させる`,
        pt: 160,
        range: 600,
    },
    千金の涙: {
        name: "千金の涙",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性ヰ能ダメージを、8秒間、自身の回避を${object.dodge_up}%上昇させる`,
        pt: 280,
        range: 400,
    },
    "次のキャストで決めるぞ。": {
        name: "次のキャストで決めるぞ。",
        text: (object) =>
            `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを、8秒間、敵の攻撃力を${object.ATK_down}%減少、攻撃頻度を${object.attackSpan_down}%延長させる\n8秒間、自身の抵抗力を${object.resist_up}%上昇させる`,
        pt: 220,
        range: 550,
    },
    綺麗にしてあげるよ: {
        name: "綺麗にしてあげるよ",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性物理ダメージを与え、5秒間、敵の命中を${object.dodge_down}%減少させる`, //dodge_down 初出
        pt: 260,
        range: 650,
    },
    "ドラコニア・ルーム": {
        name: "ドラコニア・ルーム",
        text: (object) => `範囲内の 2体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性ヰ能ヰダメージを与え、 4秒間、敵のヰ能攻撃を発動出来なくさせる`,
        pt: 300,
        range: 900,
    },
    残念ですがお別れのようです: {
        name: "残念ですがお別れのようです",
        text: (object) =>
            `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性能ダメージを与え、 8秒間、敵の攻撃力を${object.ATK_down}%減少、被ダメージを${object.increaseDamage}%上昇、攻撃頻度を${object.attackSpan_down}%延長、抵抗力を${object.resist_down}%減少、 移動速度を${object.speed_down}%減少させる。`,
        pt: 200,
        range: 800,
    },
    勉強の時間だよ: {
        name: "勉強の時間だよ",
        text: (object) => `8秒間、範囲内の自身を含む味方3体に対し、攻撃力を${object.ATK_up}%、最大体力を${object.MAXHP_up}%上昇させ、2秒ごとに最大体力の${object.interval_healPercent}%自然治癒する。`,
        pt: 250,
        range: 700,
    },
    汚れつちまつた悲しみに: {
        name: "汚れつちまつた悲しみに",
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性ヰ能ダメージを与える。`,
        pt: 320,
        range: 600,
    },
    天衣無縫: {
        name: "天衣無縫",
        text: (object) => `範囲内の自身を含む味方3体に対し、5.5秒間、回避を${object.dodge_up}%上昇させる。`,
        pt: 240,
        range: 300,
    },
    紅茶も悪くないね: {
        name: "紅茶も悪くないね",
        text: (object) => `範囲内の自身を含む味方3体に対し、体力を${object.fixed_heal}回復する。`,
        pt: 125, //上方修正前:250
        range: 800,
    },
    "はい、チーズ！": {
        name: "はい、チーズ！",
        text: (object) =>
            `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与え、8秒間、敵の攻撃力を${object.ATK_down}%減少、敵の被ダメージを${object.increaseDamage}%上昇させる。`,
        pt: 210,
        range: 1100,
    },
    "荷物だけは守らないと...！": {
        name: "荷物だけは守らないと...！",
        text: (object) => `8秒間、自身の最大体力を${object.healPercent}%上昇させ、2秒毎に体力を${object.interval_fixed_heal}自然治癒する`,
        pt: 250,
        range: 0,
    },
    "羅生門・顎": {
        name: "羅生門・顎",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性ヰ能ダメージを与える`,
        pt: 250,
        range: 700,
    },
    /***** 常設札 SSR   ******/
    月下獣: {
        name: "月下獣",
        text: (object) => `範囲内の4体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性ヰ能ダメージを与える
        \n12秒間、自身の攻撃力を${object.ATK_up}%上昇させ、2秒ごとに体力を${object.interval_fixed_heal}自然治癒する`,
        pt: 200,
        range: 420,
    },
    独歩吟客: {
        name: "独歩吟客",
        text: (object) => `範囲内の敵5体に対し、通常攻撃の${object.damagePercent}倍の紅属性ヰ能ダメージを与える`,
        pt: 280,
        range: 900,
    },
    雨ニモマケズ: {
        name: "雨ニモマケズ",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性ヰ能ダメージを与える
        \n12秒間、自身の威圧を${object.knock_up}%上昇させる`,
        pt: 300,
        range: 400,
    },
    人間失格: {
        name: "人間失格",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性ヰ能ダメージを与える
        \n1.5秒間、自身に対してのヰ能攻撃を無効化する`,
        pt: 260,
        range: 350,
    },
    超推理: {
        name: "超推理",
        text: (object) => `8秒間、範囲内の自身以外の味方3体の攻撃力を${object.ATK_up}%上昇させ、適応度を${object.fitness_up}上昇させる`,
        pt: 240,
        range: 600,
    },
    細雪: {
        name: "細雪",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性ヰ能ダメージを与え、8秒間、敵の攻撃力を${object.ATK_down}%減少させる
        \n8秒間、自身の被ダメージを${object.decreaseDamage}%減少させる`,
        pt: 200,
        range: 450,
    },
    君死給勿: {
        name: "君死給勿",
        text: (object) => `範囲内の自身を含む味方2体の体力を${object.fixed_heal}回復する`,
        pt: 120,
        range: 400,
    },
    夜叉白雪: {
        name: "夜叉白雪",
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性ヰ能ダメージを与える`,
        pt: 180,
        range: 600,
    },
    /* 限定札 SR */
    "リュックが当たれば...！": {
        name: "リュックが当たれば...！",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与え、8秒間、敵の被ダメージを${object.increaseDamage}%上昇させる。`,
        pt: 240,
        range: 500,
    },
    "ごゆっくりどうぞ！": {
        //未確定
        name: "ごゆっくりどうぞ！",
        text: (object) => `範囲内の自身以外の味方2体の体力を${object.healPercent}%回復する`,
        pt: 90,
        range: 700,
    },
    /* ******* 常設札 SR ******** */
    僕が助けます: {
        name: "僕が助けます",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性物理ダメージを与える。`,
        pt: 230,
        range: 500,
    },
    これでも食らえ: {
        //国木田君
        name: "これでも食らえ",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性物理ダメージを与え、8秒間、敵の攻撃力を${object.ATK_down}%減少させる`,
        pt: 220,
        range: 850,
    },
    "お腹がすいていませんか？": {
        name: "",
        text: (object) => `8秒間、範囲内の自身以外の味方2体の体力を${object.fixed_heal}回復する。`,
        pt: 120,
        range: 400,
    },
    "そーれ、飛んでけ～！": {
        name: "そーれ、飛んでけ～！",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性物理ダメージを与える。`,
        pt: 280,
        range: 375,
    },
    僕が出るまでもないよ: {
        name: "僕が出るまでもないよ",
        text: (object) => `8秒間、範囲内の自身以外の味方2体の攻撃力を${object.ATK_up}%上昇、攻撃頻度を${object.attackSpan_up}%短縮、抵抗力を${object.resist_up}%上昇させる。`,
        pt: 260,
        range: 600,
    },
    演奏を始めるよ: {
        name: "演奏を始めるよ",
        text: (object) => `8秒間、範囲内の自身以外の味方3体の移動速度を${object.speed_up}%上昇、攻撃頻度を${object.attackSpan_up}%短縮、威圧を${object.knock_up}%上昇させる。`,
        pt: 250,
        range: 600,
    },
    治療の邪魔だよ: {
        name: "治療の邪魔だよ",
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与える。`,
        pt: 200,
        range: 300,
    },
    大人しくして: {
        name: "大人しくして",
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与える。
        \n8秒間、自身の威圧を${object.knock_up}%上昇させ、8秒間、範囲内の自身を含む味方2体に対し、移動速度を${object.speed_up}%上昇させる`,
        pt: 210,
        range: 250,
    },
    試させて貰う: {
        name: "試させて貰う",
        text: (object) => `範囲内の4体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性物理ダメージを与える。`,
        pt: 250,
        range: 300,
    },
    邪魔をするな: {
        name: "邪魔をするな",
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性ヰ能ダメージを与える。`,
        pt: 270,
        range: 900,
    },
    これでも食らいな: {
        name: "これでも食らいな",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与える。`,
        pt: 230,
        range: 500,
    },
    "お絵描きするね☆": {
        name: "お絵描きするね☆",
        text: (object) => `範囲内の自身を含む味方2体に対し、8.5秒間、2秒毎に最大体力の${object.interval_healPercent}%自然治癒する。`,
        pt: 100,
        range: 450,
    },
    焦る事は無い: {
        name: "焦る事は無い",
        text: (object) => `範囲内の自身を含む味方2体に対し、8.5 秒間、2秒毎に体力を${object.interval_fixed_heal}自然治癒する。`,
        pt: 100,
        range: 600,
    },
    少し痛いぞ: {
        name: "少し痛いぞ",
        text: (object) =>
            `範囲内の1体の敵に対し、通常攻撃の ${object.damagePercent}倍の紅属性物理ダメージを与え、8秒間、敵の抵抗力を${object.resist_down}%減少させる。8秒間、自身の抵抗力を${object.resist_up}%上昇させる。`,
        pt: 190,
        range: 300,
    },
    邪魔をしないでください: {
        name: "邪魔をしないでください",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の2.6 ${object.damagePercent}倍の白属性物理ダメージを与え、8秒間、敵の攻撃力を${object.ATK_down}%減少させる。`,
        pt: 180,
        range: 650,
    },
    "避けないで頂戴ね！": {
        name: "避けないで頂戴ね！",
        text: (object) =>
            `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与え、8秒間、敵の移動速度を${object.speed_down}%減少、攻撃頻度を${object.attackSpan_down}%延長させる。`,
        pt: 220,
        range: 500,
    },
    忘れずに書いておくのである: {
        name: "忘れずに書いておくのである",
        text: (object) => `15秒間、時間経過によるバトルpt獲得量を${object.battle_pt_percent}%上昇させる。`,
        pt: 240,
        range: 0,
    },
    一息入れましょう: {
        name: "一息入れましょう",
        text: (object) => `範囲内の自身を含む味方2体に対し、最大体力の${object.healPercent}%回復する。`,
        pt: 110,
        range: 450,
    },
    贈呈品だ: {
        name: "贈呈品だ",
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与え、8秒間、敵の攻撃頻度を${object.attackSpan_down}%延長させる。`,
        pt: 260,
        range: 750,
    },
    "杖の先にご注目～！": {
        name: "杖の先にご注目～！",
        text: (object) =>
            `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性物理ダメージを与え、8秒間、敵の威圧を${object.knock_down}%減少させる。8秒間、自身の被ダメージを${object.decreaseDamage}%減少させる。`,
        pt: 230,
        range: 300,
    },
    一息つくか: {
        name: "一息つくか",
        text: (object) => `範囲内の自身を含む味方1体に対し、体力を${object.fixed_heal}回復する。`,
        pt: 120,
        range: 600,
    },
    "受け止めきれますか？": {
        name: "受け止めきれますか？",
        text: (object) =>
            `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性物理ダメージを与え、8秒間、敵の移動速度を${object.speed_down}%減少させる。8秒間、自身の被ダメージを${object.decreaseDamage}%減少させる。`,
        pt: 200,
        range: 450,
    },
    避けてくれるなよ: {
        name: "避けてくれるなよ",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与える。8秒間、自身の被ダメージを${object.decreaseDamage}%減少させる。`,
        pt: 160,
        range: 350,
    },
    我が剣は躱せぬ: {
        name: "我が剣は躱せぬ",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与える。`,
        pt: 230,
        range: 350,
    },
    身だしなみは整えるべし: {
        name: "身だしなみは整えるべし",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与える。`,
        pt: 240,
        range: 800,
    },
    /****** R 常設札 *******/
    飲み物をどうぞ: {
        name: "飲み物をどうぞ",
        text: (object) => `範囲内の自身以外の味方2体の体力を${object.fixed_heal}回復する`,
        pt: 125,
        range: 500,
    },
    野球は得意だ: {
        name: "野球は得意だ",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性物理ダメージを与え、8秒間、敵の抵抗力を${object.resist_down}%減少させる。`,
        pt: 200,
        range: 250,
    },
    投げますよー: {
        name: "投げますよー",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与え、12秒間、敵の威圧を${object.knock_down} %減少させる。`,
        pt: 200,
        range: 250,
    },
    "果たして避けられるかな？": {
        name: "果たして避けられるかな？",
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与え、12秒間、敵の攻撃頻度を${object.attackSpan_down}%延長させる。`,
        pt: 250,
        range: 550,
    },
    "えーい！": {
        name: "えーい！",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与える。`,
        pt: 200,
        range: 400,
    },
    "狙ッて投げれば・・・": {
        name: "狙ッて投げれば・・・",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性物理ダメージを与える。`,
        pt: 250,
        range: 550,
    },
    スポーツドリンクだよ: {
        name: "スポーツドリンクだよ",
        text: (object) => `範囲内の自身を含む味方1体に対し、体力を${object.fixed_heal}回復する`,
        pt: 150,
        range: 600,
    },
    外さない: {
        name: "外さない",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性物理ダメージを与え、12秒間、敵の被ダメージを${object.increaseDamage} %上昇させる。`,
        pt: 300,
        range: 850,
    },
    "む…飲み物を…": {
        name: "む…飲み物を…",
        text: (object) => `範囲内の自身を含め味方1体に対し、体力を${object.fixed_heal}回復する`,
        pt: 150,
        range: 600,
    },
    "当てるのは得意でな！": {
        name: "当てるのは得意でな！",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性物理ダメージを与え、8秒間、敵の被ダメージを${object.increaseDamage}%上昇させる`,
        pt: 200,
        range: 400,
    },
    "パスだよ☆受け取って！": {
        name: "パスだよ☆受け取って！",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性物理ダメージを与える`,
        pt: 250,
        range: 850,
    },
    遠投は勘弁してくれないかな: {
        name: "遠投は勘弁してくれないかな",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与え、8秒間、敵の攻撃力を${object.ATK_down}減少させる`,
        pt: 200,
        range: 600,
    },
    "ドッジボールの要領でいいか。": {
        name: "ドッジボールの要領でいいか。",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性物理ダメージを与え、8秒間、自身の回避を${object.dodge_up}%上昇させる。`,
        pt: 220,
        range: 350,
    },
};
