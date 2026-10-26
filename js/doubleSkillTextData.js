const doubleSkillTextData = {
    "みんなも食べる?": {
        name: "みんなも食べる?",
        text: (object) =>
            `12秒間、範囲内の自身を含む味方4体に対し、攻撃力${object.ATK_up}%上昇し、被ダメージを${object.decreaseDamage}%減少させる。対象が蒼属性の場合、12秒間、2秒毎に最大体力の${object.interval_fixed_heal}自然治癒する。`,
        pt: 500,
        range: 900,
    },
    モルグ街の黒猫: {
        name: "モルグ街の黒猫",
        text: (object) => `2秒間、範囲内の自身以外の味方3体に対してのダメージを無効化し、12秒間、2秒毎に最大体力の${object.interval_healPercent}%自然治癒する。`,
        pt: 400,
        range: 800,
    },
    人上人不造: {
        name: "人上人不造",
        text: (object) =>
            `8秒間、自身の被ダメージを${object.decreaseDamage}%減少させる。8秒間、範囲内の自身以外の櫻眞學園所属の味方全員に対し、攻撃力を${object.ATK_up}上昇、威圧を${object.knock_up}上昇、攻撃頻度を${object.attackSpan_up}を短縮させる。`,
        pt: 225,
        range: 2000,
    },
    外套: {
        name: "外套",
        text: (object) => `範囲内のすべての敵に対し、通常攻撃の${object.damagePercent}倍の黒属性ヰ能ダメージを与え、自身の最大体力の${object.healPercent}%回復する。`,
        pt: 480,
        range: 550,
    },
    邪魔をしないでください: {
        name: "邪魔をしないでください",
        text: (object) =>
            `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性ヰ能ダメージを、12秒間、攻撃頻度を${object.attackSpan_down}%延長、移動速度を${object.speed_down}%減少させる。`,
        pt: 520,
        range: 700,
    },
    雪中梅: {
        name: "雪中梅",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性ヰ能ダメージを、12秒間、自身の命中を${object.accuracy_up}%上昇させる`,
        pt: 320,
        range: 900,
    },
    千金の涙: {
        name: "千金の涙",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性ヰ能ダメージを、12秒間、自身の回避を${object.dodge_up}%上昇させる`,
        pt: 560,
        range: 500,
    },
    "釣り上げてみせる。": {
        name: "釣り上げてみせる。",
        text: (object) =>
            `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを、12秒間、敵の攻撃力を${object.ATK_down}%減少、攻撃頻度を${object.attackSpan_down}%延長させる\n12秒間、自身の抵抗力を${object.resist_up}%上昇させる`,
        name: "釣り上げてみせる。",
        pt: 440,
        range: 700,
    },
    掃除の仕上げだ: {
        name: "掃除の仕上げだ",
        text: (object) => `範囲内の6体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性物理ダメージを与え、10秒間、敵の命中を${object.dodge_down}%減少させる`, //dodge_down 初出
        pt: 520,
        range: 800,
    },
    "ドラコニア・ルーム": {
        name: "ドラコニア・ルーム",
        text: (object) => `範囲内の 5体の敵に対し、通常攻撃の ${object.damagePercent}倍の翠属性ヰ能ヰダメージを与え、 4秒間、敵のヰ能攻撃を発動出来なくさせる`,
        pt: 600,
        range: 1100,
    },
    知識は使ってこそさ: {
        name: "知識は使ってこそさ",
        text: (object) => `12秒間、範囲内の自身を含む味方4体に対し、攻撃力を${object.ATK_up}%、最大体力を${object.MAXHP_up}%上昇させ、2秒ごとに最大体力の${object.interval_healPercent}%自然治癒する。`,
        pt: 250,
        range: 1000,
    },
    大いなる沈黙を差し上げます: {
        name: "大いなる沈黙を差し上げます",
        text: (object) =>
            `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性キ能ダメージを与え、12秒間、敵の攻撃力を${object.ATK_down}%減少、被ダメージを${object.increaseDamage}%上昇、攻撃頻度を${object.attackSpan_down}%延長、抵抗力を${object.resist_down}%減少、 移動速度を${object.speed_down}%減少させる`,
        pt: 400,
        range: 1000,
    },
    汚れつちまつた悲しみに: {
        name: "汚れつちまつた悲しみに",
        text: (object) => `範囲内の5体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性ヰ能ダメージを与える。`,
        pt: 640,
        range: 1000,
    },
    天衣無縫: {
        name: "天衣無縫",
        text: (object) => `範囲内の自身を含む味方4体に対し、5.5秒間、回避を${object.dodge_up}%上昇させる。`,
        pt: 480,
        range: 300,
    },
    喉を潤すとしよう: {
        name: "喉を潤すとしよう",
        text: (object) => `範囲内の自身を含む味方3体に対し、体力を${object.fixed_heal}回復する。範囲内の自身を含む最も敵陣に近い味方1体の不利効果を全て解除する。`,
        pt: 250, //修正前 500,
        range: 1000,
    },
    "写真撮るから動くの禁止！": {
        name: "写真撮るから動くの禁止！",
        text: (object) =>
            `範囲内の5体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与え、12秒間、敵の攻撃力を${object.ATK_down}%減少、敵の被ダメージを${object.increaseDamage}%上昇させる。`,
        pt: 420,
        range: 1200,
    },
    "なんでこんな処に風船が...?": {
        //半角で入れた。
        name: "なんでこんな処に風船が...?",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性ヰ能ダメージを与え、12秒間、敵の被ダメージを${object.increaseDamage}%上昇させる`,
        pt: 500,
        range: 600,
    },
    "羅生門・連門顎": {
        name: "羅生門・連門顎",
        text: (object) => `範囲内の4体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性ヰ能ダメージを与える`,
        pt: 500,
        range: 1000,
    },
    /* *** 常設札 SSR 8枚 *** */

    月下獣: {
        name: "月下獣",
        text: (object) => `範囲内の敵4体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性ヰ能ダメージを与える
        \n12秒間、自身の攻撃力を${object.ATK_up}%上昇させ、2秒ごとに体力を${object.interval_fixed_heal}自然治癒する`,
        pt: 420,
        range: 520,
    },
    独歩吟客: {
        name: "独歩吟客",
        text: (object) => `範囲内の敵すべてに対し、通常攻撃の${object.damagePercent}倍の紅属性ヰ能ダメージを与える`,
        pt: 560,
        range: 1050,
    },
    雨ニモマケズ: {
        name: "雨ニモマケズ",
        text: (object) => `範囲内の敵すべてに対し、通常攻撃の${object.damagePercent}倍の白属性ヰ能ダメージを与える
        \n12秒間、自身の威圧を${object.knock_up}%上昇させる`,
        pt: 600,
        range: 500,
    },
    人間失格: {
        name: "人間失格",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性ヰ能ダメージを与える\n2秒間、自身に対してのヰ能攻撃を無効化する`,
        pt: 520,
        range: 400,
    },
    超推理: {
        name: "超推理",
        text: (object) => `12秒間、範囲内の自身以外の味方3体の攻撃力を${object.ATK_up}%上昇させ、適応度を${object.fitness_up}上昇させる`,
        pt: 480,
        range: 800,
    },
    細雪: {
        name: "細雪",
        text: (object) =>
            `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性ヰ能ダメージを与え、12秒間、敵の攻撃力を${object.ATK_down}%減少させる\n8秒間、自身の被ダメージを${object.decreaseDamage}%減少させる`,
        pt: 400,
        range: 700,
    },
    君死給勿: {
        name: "君死給勿",
        text: (object) => `範囲内の自身を含む味方3体の体力を${object.fixed_heal}回復する`,
        pt: 240,
        range: 600,
    },
    夜叉白雪: {
        name: "夜叉白雪",
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性ヰ能ダメージを与える\n12秒間、自身の攻撃力を${object.ATK_up}%上昇させる`,
        pt: 360,
        range: 750,
    },
    /* *** 常設札 SSR おわり *** */

    /* *** 限定札 SR *** */

    "投げたくないけど...!": {
        //未所持なので未確定
        name: "投げたくないけど...!",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与え、12秒間、敵の被ダメージを${object.increaseDamage} %上昇させる。`,
        pt: 480,
        range: 600,
    },
    うずまきの珈琲は絶品よ: {
        /* 未所持なので未確定 */ name: "うずまきの珈琲は絶品よ",
        text: (object) => `範囲内の自身以外の味方3体の体力を${object.healPercent}%回復する`, //修正入ってないので変更なし
        pt: 180, //修正前:360
        range: 800,
    },
    /* *** 限定札 SR 終わり *** */

    /* *** 常設札 SR 24枚 *** */
    僕が守ります: {
        name: "僕が守ります", //配布枠か
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性物理ダメージを与える。`,
        pt: 440,
        range: 350,
    },
    動きが単調だぞ: {
        name: "動きが単調だぞ",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性物理ダメージを与え、12秒間、敵の攻撃力を${object.ATK_down}%減少させる。`,
        pt: 440,
        range: 900,
    },
    美味しい野菜をどうぞ: {
        name: "美味しい野菜をどうぞ",
        text: (object) => `範囲内の自身以外の味方3体の体力を${object.fixed_heal}回復する`,
        //修正前 12秒間、範囲内の自身以外の味方3体の移動速度を15%上昇、攻撃頻度を15%短縮、威圧を15%上昇させる。
        pt: 240,
        range: 600,
    },
    どこまで飛んでいくかな: {
        name: "どこまで飛んでいくかな",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性物理ダメージを与える。`,
        pt: 560,
        range: 900,
    },
    僕の為に頑張ってね: {
        name: "僕の為に頑張ってね",
        text: (object) => `12秒間、範囲内の自身以外の味方2体の攻撃力を${object.ATK_up}%上昇、攻撃頻度を${object.attackSpan_up}%短縮、抵抗力を${object.resist_up}%上昇させる。`,
        pt: 520,
        range: 750,
    },
    これでも軽音部だからね: {
        name: "これでも軽音部だからね",
        text: (object) => `12秒間、範囲内の自身以外の味方3体の移動速度を${object.speed_up}%上昇、攻撃頻度を${object.attackSpan_up}%短縮、威圧を${object.knock_up}%上昇させる。`,
        pt: 500,
        range: 750,
    },
    怪我を甘くみるんじゃないよ: {
        name: "怪我を甘くみるんじゃないよ",
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与える。`,
        pt: 400,
        range: 450,
    },
    邪魔しないで: {
        name: "邪魔しないで",
        text: (object) =>
            `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与える。12秒間、自身の威圧を${object.knock_up}%上昇させ、12秒間、範囲内の自身を含む味方3体に対し、移動速度を${object.speed_up}%上昇させる。`,
        pt: 420,
        range: 300,
    },
    "立っていられるか?": {
        name: "立っていられるか?",
        text: (object) => `範囲内の4体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性物理ダメージを与える。`,
        pt: 500,
        range: 450,
    },
    刻み捨てる: {
        name: "刻み捨てる",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性ヰ能ダメージを与える。`,
        pt: 540,
        range: 900,
    },
    避けんなよ: {
        name: "避けんなよ",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与える。`,
        pt: 460,
        range: 600,
    },
    "お絵描き楽しいな☆": {
        name: "お絵描き楽しいな☆",
        text: (object) => `範囲内の自身を含む味方2体に対し、12.5秒間、2秒毎に最大体力の${object.interval_healPercent}%自然治癒する。`,
        pt: 200,
        range: 600,
    },
    佳く頑張っているね: {
        name: "佳く頑張っているね",
        text: (object) => `範囲内の自身を含む味方2体に対し、12.5秒間、2秒毎に体力を${object.interval_fixed_heal}自然治癒する。`,
        pt: 200,
        range: 750,
    },
    悪いが通らせてもらう: {
        name: "悪いが通らせてもらう",
        text: (object) =>
            `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与え、12秒間、敵の抵抗力を${object.resist_down}%減少させる。12秒間、自身の抵抗力を${object.resist_up}%上昇させる。`,
        pt: 380,
        range: 400,
    },
    風紀を乱す者は許しません: {
        name: "風紀を乱す者は許しません",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性物理ダメージを与え、12秒間、敵の攻撃力を${object.ATK_down}%減少させる。`,
        pt: 360,
        range: 750,
    },
    こっちに来ないでよ: {
        name: "こっちに来ないでよ",
        text: (object) =>
            `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与え、12 秒間、敵の移動速度を${object.speed_down}%減少、攻撃頻度を${object.attackSpan_down}%減少させる。`,
        pt: 440,
        range: 660,
    },
    "閃いた！": {
        name: "閃いた！",
        text: (object) => `15秒間、時間経過によるバトルpt獲得量を${object.battle_pt_percent}%上昇させる。`,
        pt: 480,
        range: 0,
    },
    上質な香りです: {
        name: "上質な香りです",
        text: (object) => `範囲内の自身を含む味方2体に対し、最大体力の${object.healPercent}%回復する。`,
        pt: 220,
        range: 660,
    },
    お気に召してくれるかな: {
        name: "お気に召してくれるかな",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与え、12秒間、敵の攻撃頻度を${object.attackSpan_down}%延長させる。`,
        pt: 520,
        range: 900,
    },
    ニコライマジーック: {
        name: "ニコライマジーック",
        text: (object) =>
            `範囲内の4体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性物理ダメージを与え、12秒間、敵の威圧を${object.knock_down}%減少させる。12秒間、自身の被ダメージを${object.decreaseDamage}%減少させる。`,
        pt: 460,
        range: 400,
    },
    "美味いな･･･": {
        name: "美味いな･･･",
        text: (object) => `範囲内の自身を含む味方1体に対し、体力を${object.fixed_heal}回復する。`, //こいつの挙動で味方に回復することあるの？
        pt: 240,
        range: 750,
    },
    指導して差し上げます: {
        name: "指導して差し上げます",
        text: (object) =>
            `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性物理ダメージを与え、12秒間、敵の移動速度を${object.speed_down}%減少させる。12秒間、自身の被ダメージを${object.decreaseDamage}%減少させる`,
        pt: 400,
        range: 600,
    },
    "儂の一撃は痛いぞ！": {
        name: "儂の一撃は痛いぞ！",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与える。12秒間、自身の被ダメージを${object.decreaseDamage}%減少させる。`,
        pt: 320,
        range: 450,
    },
    悪は斬る: {
        name: "悪は斬る",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与える。`,
        pt: 460,
        range: 400,
    },
    化物風情が近づくな: {
        name: "化物風情が近づくな",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与える。`,
        pt: 480, //skillポイント
        range: 900, //範囲
    },
    /* *** 常設札 SR 終わり *** */
    /* *** 常設札 R 8枚 *** */
    元気になりますよ: {
        name: "元気になりますよ",
        text: (object) => `範囲内の自身以外の味方2体の体力を${object.fixed_heal}回復する`,
        pt: 250, //修正前:500
        range: 600,
    },
    この球を見切れるか: {
        name: "この球を見切れるか",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性物理ダメージを与え、8秒間、敵の抵抗力を${object.resist_down}%減少させる。`,
        pt: 400,
        range: 300,
    },
    "これを捕れますか？": {
        name: "これを捕れますか？",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与え、12秒間、敵の威圧を${object.knock_down} %減少させる。`,
        pt: 400,
        range: 300,
    },
    "それじゃいくよ～♪": {
        name: "それじゃいくよ～♪",
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与え、12秒間、敵の攻撃頻度を${object.attackSpan_down}%延長させる。`,
        pt: 500,
        range: 600,
    },
    ボールって中ると楽しいよね: {
        name: "ボールって中ると楽しいよね", //中る→あたる
        text: (object) => `範囲内の2体の敵に対し、通常攻撃の${object.damagePercent}倍の蒼属性物理ダメージを与える。`,
        pt: 500,
        range: 600,
    },
    思いッきりいかせてもらうよ: {
        name: "思いッきりいかせてもらうよ",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の翠属性物理ダメージを与える。`,
        pt: 400,
        range: 600,
    },
    水分補給を忘れるンじゃないよ: {
        name: "水分補給を忘れるンじゃないよ",
        text: (object) => `範囲内の自身を含む味方2体に対し、体力を${object.fixed_heal}回復する`,
        pt: 600,
        range: 800,
    },
    手加減はしない: {
        name: "手加減はしない",
        text: (object) => `範囲内の3体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性物理ダメージを与え、12秒間、敵の被ダメージを${object.increaseDamage} %上昇させる。`,
        pt: 600,
        range: 900,
    },
    "回復を図る。": {
        name: "回復を図る。",
        text: (object) => `範囲内の自身を含め味方2体に対し、体力を${object.fixed_heal}回復する`,
        pt: 300,
        range: 800,
    },
    "受けてみやがれ！": {
        name: "受けてみやがれ！",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性物理ダメージを与え、8秒間、敵の被ダメージを${object.increaseDamage}%上昇させる`,
        pt: 400,
        range: 500,
    },
    痛かったらごめんね: {
        name: "痛かったらごめんね",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の白属性物理ダメージを与える`,
        pt: 500,
        range: 900,
    },
    消えない魔球だよ: {
        name: "消えない魔球だよ",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の紅属性物理ダメージを与え、12秒間、敵の攻撃力を${object.ATK_down}減少させる`,
        pt: 400,
        range: 700,
    },
    "当てさせて貰う。": {
        name: "当てさせて貰う。",
        text: (object) => `範囲内の1体の敵に対し、通常攻撃の${object.damagePercent}倍の黒属性物理ダメージを与え、12秒間、自身の回避を${object.dodge_up}%上昇させる。`,
        pt: 440,
        range: 400,
    },
};
