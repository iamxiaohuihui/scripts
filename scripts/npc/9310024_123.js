
status = -1;
var itemList = Array(
			Array(1051098,300,1,1),//��ԡ��
			Array(1050100,300,1,1),//��ԡ��
			Array(1032026,500,1,1),//��ˮ������
			Array(1032027,500,1,1),//��ˮ������
			Array(1032028,500,1,1),//��ˮ������
			Array(1032035,300,1,1),//��Ҷ����
			Array(1032040,300,1,1),//��Ҷ�Ͷ���
			Array(1002677,400,1,1),//��߽���ñ
			Array(1002699,300,1,1),//�Ϲ�ñ��
			Array(1102040,200,1,1),//�������磨�ƣ�
			Array(1102041,30,1,1),//�������磨�ۣ�
			Array(1102042,100,1,1),//�������磨�ϣ�
			Array(1122015,300,1,1),//��ҶΧ��
			Array(1132000,80,1,1),//��ɫ����
			Array(1132001,80,1,1),//��ɫ����
			Array(1132002,80,1,1),//��ɫ����
			Array(1132003,80,1,1),//��ɫ����
			Array(1002418,100,1,1),//���ϱ�ֽͷ��
			Array(1002418,400,1,1),//��Ҷñ
			Array(1002424,300,1,1),//������ñ
			Array(1002425,300,1,1),//������ñ
			Array(1332053,300,1,1),//Ұ���տ���			
			Array(1442023,300,1,1),//���ϰ�
			Array(1302087,500,1,1),//���
			Array(1002508,300,1,1),//��Ҷͷ��
			Array(1332021,500,1,1),//������
			Array(1332032,500,1,1),//ʥ����
			Array(1322027,100,1,1),//ƽ�׹�
			Array(1302037,500,1,1),//С��
			Array(1402044,500,1,1),//�Ϲϵ���
			Array(1402014,50,1,1),//�¶ȼ�
			Array(1432013,100,1,1),//�Ϲ�ǹ
			Array(1012179,200,1,1),//¹����
			Array(1012056,200,1,1),//������
			Array(1022047,200,1,1),//èͷӥ
			Array(1022058,300,1,1),//��è
			Array(1022060,300,1,1),//����
			Array(1122001,200,1,1),//��ɫ�������
			Array(1122002,200,1,1),//��ɫ�������
			Array(1122003,200,1,1),//��ɫ�������
			Array(1122004,200,1,1),//�ۺ�������
			Array(1122006,200,1,1),//��ɫ�������
			Array(1122005,200,1,1),//��ɫ�������
			Array(1372031,300,1,1),//ʥ�Ͷ���
			Array(1402029,300,1,1),//������
			Array(1302180,300,1,1),//��Ҷɡ
			Array(1302063,100,1,1),//Ȼ�յĻ��浶
			Array(1322051,200,1,1),//��Ϧ
			Array(1302021,300,1,1),//��Ƥ��ͷ
			Array(1302024,300,1,1),//�ϱ�ֽ��
			Array(1302049,200,1,1),//���߱�
			Array(1102199,300,1,1),//����ʵƱ�
			Array(1382037,100,1,1),//������
			Array(1332020,300,1,1),//̫����
			Array(1382015,300,1,1),//��Ģ��
			Array(1402013,200,1,1),//���ս�
			Array(1050018,170,1,1),//��ɫɣ�÷�
			Array(1050017,170,1,1),//��ɫɣ�÷�
			Array(1322027,200,1,1),//ƽ�׹�
			Array(1702020,200,1,1),//������
                        Array(1082145,150, 1, 1), //��������(��)
                        Array(1082146,150, 1, 1), //��������(��)
                        Array(1082147,150, 1, 1), //��������(��)
                        Array(1082148,150, 1, 1), //��������(��)
                        Array(1082149, 60, 1, 1), //��������(��)
                        Array(1082150,150, 1, 1), //��������(��)
			Array(1442011,300,1,1),//���˰�
			Array(1442011,200,1,1),//��ɫ���˰�
			Array(1442027,200,1,1),//��ɫ���˰�
			Array(1442028,200,1,1),//��ɫ���˰�
			Array(1442029,200,1,1),//��ɫ���˰�
			Array(1442065,200,1,1),//��ɫ���˰�
			Array(1442066,200,1,1),//��ɫ���˰�
			Array(1442069,200,1,1),//��ɫ���˰�
			Array(1442070,200,1,1),//��ɫ���˰�
			Array(1432015,200,1,1),//��ɫ��ѩ��
			Array(1432016,200,1,1),//��ɫ��ѩ��
			Array(1432017,200,1,1),//��ɫ��ѩ��
			Array(1072239,300,1,1),//��ɫ��Ь
			Array(1002743,100,1,1),//����֮ñ
			Array(2070011,300,1,1),//��Ҷ��
			Array(1002511,300,1,1),//��Ҷͷ��
			Array(1002510,300,1,1),//��Ҷͷ��
			Array(1122074,300,1,1),//��Ҷ��׹
			Array(1082252,300,1,1),//��Ҷ����
			Array(1012102,300,1,1),//��Ҷ
			Array(1012103,300,1,1),//��Ҷ
			Array(1102071,150,1,1),//��Ҷ����
			Array(1102167,150,1,1),//��Ҷ����
			Array(1102168,150,1,1),//��Ҷ����
			Array(1012071,200,1,1),//�ɿ���ѩ��
			Array(1012072,200,1,1),//���ѩ��
			Array(1012073,200,1,1),//����ѩ��

			Array(2022140,300,10,0),//�ƽ𿪿�Ц

			Array(2022118,300,2,1),//����Ա��ף��

			
			Array(1012070,100,10,1),//��ݮѩ��
			Array(2022140,500,10,0),//�ƽ𿪿�Ц

Array(1302016, 600, 1, 0), //��ɫ��ɡ
Array(1302017, 600, 1, 0), //��ɫ��ɡ
Array(1302019, 600, 1, 1), //������
Array(1302021, 600, 1, 0), //��Ƥ��ͷ
Array(1302022, 600, 1, 0), //��
Array(1302024, 500, 1, 0), //�ϱ�ֽ��
Array(1302025, 500, 1, 0), //����ɡ
Array(1302027, 500, 1, 0), //����ɡ
Array(1302028, 500, 1, 1), //����ɡ
Array(1302029, 500, 1, 0), //����ɡ
Array(1302031, 300, 1, 1), //���ǽ�
Array(1302035, 500, 1, 1), //��Ҷ��
Array(1302036, 600, 1, 1), //��Ҷ��
Array(1302050, 200, 1, 0), //ս��
Array(1302051, 200, 1, 0), //����֮��
Array(1302013, 300, 1, 0), //��ɫ����
Array(1302053, 200, 1, 0), //���͵�
Array(1302061, 100, 1, 1), //���ٱ���
Array(1302063, 50, 1, 1), //ȼ�յĻ��浶
Array(1302066, 300, 1, 0), //��Ҷ3����
Array(1302067, 100, 1, 0), //��Ҷ�����
Array(1302071, 100, 1, 1), //��ɫ������ӾȦ
Array(1302077, 100, 1, 0), //����սʿ֮��
Array(1302080, 100, 1, 1), //�߲��޺����
Array(1302084, 540, 1, 1), //���
Array(1302085, 540, 1, 1), //����
Array(1302087, 400, 1, 1), //���
Array(1312002, 600, 1, 1), //����
Array(1312012, 600, 1, 0), //Ǭ��Ȧ
Array(1312013, 600, 1, 0), //�йٱ�
Array(1312014, 600, 1, 0), //������
Array(1322005, 600, 1, 0), //����
Array(1322006, 600, 1, 0), //�ֹ�
Array(1322007, 600, 1, 0), //Ƥ�������
Array(1322008, 600, 1, 1), //007���
Array(1322009, 100, 1, 0), //��Ͱ��
Array(1322010, 600, 1, 0), //��������
Array(1322011, 600, 1, 0), //��������
Array(1322012, 100, 1, 0), //��ɫשͷ
Array(1322022, 600, 1, 0), //�컨����ӾȦ
Array(1322023, 600, 1, 0), //��������ӾȦ
Array(1322024, 200, 1, 0), //����ӾȦ
Array(1322025, 300, 1, 1), //������ӾȦ
Array(1322026, 400, 1, 1), //�ʺ���ӾȦ
Array(1322027, 100, 1, 0), //��٤�յ�ƽ�׹�
Array(1322031, 600, 1, 0), //��������
Array(1322032, 600, 1, 0), //��ͷ��
Array(1322033, 600, 1, 0), //���ְ�
Array(1322034, 600, 1, 0), //����
Array(1322051, 600, 1, 1), //��Ϧ
Array(1332020, 600, 1, 1), //̫����
Array(1332021, 600, 1, 1), //������
Array(1332053, 100, 1, 1), //Ұ���տ���
Array(1332066, 100, 1, 0), //���ֹκ���
Array(1372017, 600, 1, 0), //��·��
Array(1422004, 600, 1, 0), //����
Array(1442004, 600, 1, 0), //�ϰ�
Array(1442011, 600, 1, 0), //���˰�
Array(1442012, 500, 1, 0), //���ѩ��
Array(1442013, 500, 1, 0), //�׺�ѩ��
Array(1442014, 500, 1, 0), //��ѩ��
Array(1442015, 400, 1, 0), //�ƽ�ѩ��
Array(1442016, 300, 1, 1), //��ѩ��
Array(1442018, 100, 1, 1), //������
Array(1442021, 300, 1, 0), //���ϰ�
Array(1442022, 200, 1, 1), //���ϰ�
Array(1442023, 100, 1, 1), //���ϰ�		
Array(1002894, 100, 1, 1), //��ɫ��֯����
Array(1002895, 100, 1, 1), //��ɫ��֯����
Array(1002896, 130, 1, 1), //��ɫ��֯����
Array(1002897, 140, 1, 1), //��ɫ��֯����
Array(1002898, 140, 1, 1), //��ɫ��֯����
Array(1002899, 140, 1, 1), //��ɫ��֯����
Array(1002900, 140, 1, 1), //��ɫ��֯����			
Array(1132000, 200, 1, 1), //��ɫ����
Array(1132001, 200, 1, 1), //��ɫ����
Array(1132002, 200, 1, 1), //��ɫ����
Array(1132003, 200, 1, 1), //��ɫ����		
Array(1012011, 200, 1, 0), //ʥ��¹�ı���
Array(1012012, 200, 1, 0), //ʥ��¹�ı���
Array(1012013, 200, 1, 0), //ʥ��¹�ı���
Array(1012014, 200, 1, 0), //ʥ��¹�ı���
Array(1012015, 200, 1, 0), //ʥ��¹�ı���
Array(1012016, 200, 1, 0), //ʥ��¹�ı���
Array(1012017, 200, 1, 0), //ʥ��¹�ı���
Array(1012018, 200, 1, 0), //ʥ��¹�ı���
Array(1012019, 200, 1, 0), //ʥ��¹�ı���
Array(1012020, 200, 1, 0), //ʥ��¹�ı���
Array(1012056, 200, 1, 1), //������
Array(1012058, 200, 1, 1), //ƥŵ�ܵı���
Array(1012059, 200, 1, 1), //ƥŵ�ܵı���
Array(1012060, 200, 1, 1), //ƥŵ�ܵı���
Array(1012061, 100, 1, 1), //ƥŵ�ܵı���

//Array(3010013, 100, 1, 1), //�Ƴ�����
//Array(3010014, 100, 1, 1), //������
//Array(3010018, 100, 1, 1), //Ҭ����ɳ̲��
//Array(3010019, 100, 1, 1), //��˾��
//Array(3010021, 100, 1, 1), //ůů��
//Array(3010025, 100, 1, 1), //��Ҷ�����
//Array(3010028, 100, 1, 1), //�����ķ�²

                        Array(1302030,200,1,1), //��Ҷ��
			Array(1302035,200,1,1), //��Ҷ��

			Array(1302066,200,1,1), //��Ҷ3����
			Array(1332025,200,1,1), //��Ҷ��

			Array(1382012,200,1,1), //��Ҷ��

			Array(1412011,200,1,1), //��Ҷ��
			
			Array(1422014,200,1,1), //��Ҷ��
			
			Array(1432012,200,1,1), //��Ҷǹ
			
			Array(1442024,200,1,1), //��Ҷì
			
			Array(1452022,200,1,1), //��Ҷ��
			
			Array(1462019,200,1,1), //��Ҷ��
			
			Array(1472030,220,1,1), //С��Ҷȭ
			Array(1472032,200,1,1), //��Ҷȭ
			
/*
			Array(3010044,60,1,1), //��ɡ����
			Array(3010036,60,1,1), //��ǧ
			Array(3010049,60,1,1), //ѧ����
			Array(3010110,60,1,1), //��
			Array(3010131,60,1,1), //��è
			Array(1022129,60,1,1), //�۾�
			Array(3012001,60,1,1), //���� 
			Array(3012002,60,1,1), //ԡͰ
			Array(3012003,60,1,1), //����
			Array(3010013,60,1,1), //������
			Array(3010018,60,1,1), //Ҭ����
			Array(3010021,60,1,1), //ůů��
			Array(3010024,60,1,1), //�����
			Array(3010025,60,1,1), //5�����Ҷ����
			Array(3010026,60,1,1), //���鸽��
			Array(3010034,60,1,1), //���ں�
			Array(3010035,60,1,1), //������
			Array(3010043,60,1,1), //ħŮɨ��
			Array(3010051,60,1,1), //ɳĮ����1
			Array(3010052,60,1,1), //ɳĮ����2
			Array(3010054,60,1,1), //���ല
			Array(3010057,60,1,1), //Ѫɫõ��
			Array(3010058,60,1,1), //����ĩ��
			Array(3010063,60,1,1), //��������
			Array(3010068,60,1,1), //¶ˮ����
			Array(3010069,60,1,1), //��Ʒ�
			Array(3010071,60,1,1), //��������
			Array(3010075,60,1,1), //���ֿ�
			Array(3010075,60,1,1), //����è
			Array(3010079,60,1,1), //��è
			Array(3010085,60,1,1), //����������
			Array(3010096,60,1,1), //������ʯ
			Array(3010099,60,1,1), //����������
			Array(3010109,60,1,1), //ů¯����
			Array(3010110,60,1,1), //����
			Array(3010129,60,1,1), //��������
			Array(3010139,60,1,1), //˽�ܿռ�
			Array(3010140,60,1,1), //���տ���
			Array(3010147,60,1,1), //��������
			Array(3010149,60,1,1), //����
			Array(3010151,60,1,1), //���˵�
			Array(3010151,60,1,1), //�����ŷ�
			Array(3010169,60,1,1), //������
			Array(3010172,60,1,1), //�ǿ�����
			Array(3010175,60,1,1), //����������
			Array(3010193,60,1,1), //����ƿ
			Array(3010195,60,1,1), //�޼�֮��
			Array(3010195,60,1,1), //����ԡ��
			Array(3010289,60,1,1), //�����̶�ͨ��
			Array(3010293,60,1,1), //��������
			Array(3010403,60,1,1), //���ֻ�
			Array(3010410,60,1,1), //����
			Array(3010411,60,1,1), //˫��
			Array(3010412,60,1,1), //˫��
			Array(3010428,60,1,1), //ˮ��
			Array(3010437,60,1,1), //ħ����
			Array(3010438,60,1,1), //����
			Array(3010453,60,1,1), //����
			Array(3010454,60,1,1), //�����ƶ�
			Array(3010462,60,1,1), //����̨
			Array(3010494,60,1,1), //TV����
			Array(3010505,60,1,1), //������
			Array(3010515,60,1,1), //��ʯ����
			Array(3010609,60,1,1), //����������
			Array(3010622,60,1,1), //����
			Array(3010632,60,1,1), //ӡ�ڰ�
			Array(3010633,60,1,1), //ӡ�ڰ�
			Array(3010659,60,1,1), //��ʿ
			Array(3010716,60,1,1), //����Ģ��
			Array(3010729,60,1,1), //�¶�����
			Array(3010730,60,1,1), //С���ϳ���
			Array(3010733,60,1,1), //��������
			Array(3010738,60,1,1), //����������
			Array(3010739,60,1,1), //ѩ���㲨
			Array(3010753,60,1,1), //õ������
			Array(3010767,60,1,1), //ѩ������
			Array(3010760,60,1,1), //�Ŵ�ԡ��
			Array(3010879,60,1,1), //����
			Array(3010937,60,1,1), //���
			Array(3010938,60,1,1), //���
			Array(3010939,60,1,1), //���
			Array(3010946,60,1,1), //ɭ�ֻ��
			Array(3012007,60,1,1), //ʯʨ
			Array(3012008,60,1,1), //��������
			Array(3012011,60,1,1), //���
			Array(3012022,60,1,1), //��˾
			Array(3015053,60,1,1), //������
			Array(3015120,60,1,1), //��ͷ��ս
			Array(3015264,60,1,1), //��ζ����
			Array(3015158,60,1,1), //ӡ�ڰ�
			Array(3015158,60,1,1), //ӡ�ڰ�
			Array(5150038,100,1,1), //�������ǿ�
Array(3010029, 60, 1, 1), //������
Array(3010030, 60, 1, 1), //�ڻ���
Array(3010031, 60, 1, 1), //�컷��
Array(3010032, 60, 1, 1), //�ƻ���
Array(3010033, 60, 1, 1), //�̻���
Array(3010037, 60, 1, 1), //������
Array(3010044, 60, 1, 1), //ͬһ��ɡ��
Array(3012001, 60, 1, 1), //����
Array(3012002, 60, 1, 1), //ԡͰ
Array(3010073, 50, 1, 1), //PB����
Array(3012003, 60, 1, 1), //��������
Array(3010012, 50, 1, 1), //��ʿ ����
Array(3010025, 60, 1, 1), //��Ҷ�����
Array(3010037, 60, 1, 1), //������
Array(3010038, 60, 1, 1), //��������
Array(3010040, 60, 1, 1), //������
Array(3010041, 60, 1, 1), //��������
Array(3010043, 60, 1, 1), //ħŮ�ķ�ɨ��
Array(3010044, 60, 1, 1), //ͬһ��ɡ��
Array(3010045, 60, 1, 1), //��������
Array(3010046, 60, 1, 1), //������
Array(3010047, 60, 1, 1), //������
Array(3010048, 60, 1, 1), //ʥ��������
Array(3010049, 60, 1, 1), //ѩ����
Array(3010050, 60, 1, 1), //������
Array(3010057, 60, 1, 1), //Ѫɫõ��
Array(3010058, 60, 1, 1), //����ĩ��
Array(3010068, 60, 1, 1), //¶ˮ����
Array(3010071, 60, 1, 1), //������
Array(3010077, 60, 1, 1), //èͷӥ����
Array(3010085, 60, 1, 1), //����������
Array(3010096, 60, 1, 1), //������ʯ����
Array(3010095, 60, 1, 1), //ʯͷ������
Array(3010094, 60, 1, 1), //ƯƯ������
Array(3010098, 60, 1, 1), //����լ��
Array(3010106, 60, 1, 1), //ѩ��ս��
*/

Array(2070008, 600, 1, 1), //Сѩ��
Array(2070002, 500, 1, 1), //��ɫ����
Array(2070002, 500, 1, 1), //��ɫ����
Array(2070003, 500, 1, 1), //ѩ����
Array(2070003, 500, 1, 1), //ѩ����
Array(2070004, 400, 1, 1), //��ɫ��
Array(1402014 ,800,1, 1), //�¶ȼ�
			Array(3010070,100,1, 1), //���ް�Ʒ����
			Array(3010073,800,1, 1), //PB����
			Array(3010864 ,800,1, 1), //��ɫ��������
			//Array(3010788,800,1, 1), //���ް���ҹ��
			//Array(3010592,800,1, 1), //������������
			Array(3010581,800,1, 1), //�ڰ���������
			Array(3010561,800,1, 1), //�����ĵ�������
			//Array(3010519,800,1, 1), //�޴��ѩ������
			//Array(3010520,800,1, 1), //�޴����������
			//Array(3010689,800,1, 1), //���ް�ʮ����
			Array(3010188,800,1, 1), //�ࡤ�װ�����
            Array(3010044  ,1000,1, 1), //ͬһ��ɡ��

Array(3010898, 800, 1, 1), //������������
Array(3010895, 800, 1, 1), //��������ͯ��
Array(3010492, 800, 1, 1), //��������
Array(3010494, 800, 1, 1), //TV����
//Array(3010876, 800, 1, 1), //ð�յ���������
Array(3010879, 800, 1, 1), //��������
Array(3010465, 800, 1, 1), //�ɰ���������
Array(3010460, 800, 1, 1), //��������
Array(3010456, 800, 1, 1), //�ž黨����
Array(3010449, 800, 1, 1), //Ȭ��10������
Array(3010440, 800, 1, 1), //Ѱ�ҹ������������
Array(3010448, 800, 1, 1), //����ԡ����
Array(3010435, 800, 1, 1), //ǧ�������
Array(3010430, 800, 1, 1), //��ɫ������
Array(3010429, 800, 1, 1), //��ɫ������
//Array(3010423, 800, 1, 1), //����������
Array(3010099, 800, 1, 1), //����������
Array(3010078, 800, 1, 1), //èͷӥ����
Array(3010077, 800, 1, 1), //��èè����
Array(3010079, 800, 1, 1), //¶ˮ����
Array(3010068, 800, 1, 1), //���Ӽ��������

Array(3010110, 800, 1, 1), //���ʴ��������
Array(3010117, 800, 1, 1), //ħ��������
Array(3010100, 800, 1, 1), //��������
//Array(3010814, 800, 1, 1), //��˿��������
Array(3010375, 800, 1, 1), //����ĳ���ҩˮ����
Array(3010377, 800, 1, 1), //���ʵ���ɫҩˮ����
Array(3010376, 800, 1, 1), //��ɫHPҩˮ����
Array(3010300, 800, 1, 1), //����ҩˮ����
Array(3010302, 800, 1, 1), //��ҫ����֮ҹ����
Array(3010374, 800, 1, 1), //�ƶ�ϴ�ּ�����
Array(3010799, 800, 1, 1), //��Ĺ��������

Array(3010797, 800, 1, 1), //�´���������
Array(3010737, 800, 1, 1), //����Ӣ��������
Array(3010738, 800, 1, 1), //��������������
Array(3010739, 800, 1, 1), //ѩ���㲨����
Array(3010067, 800, 1, 1), //��ɫ���ʦ��
Array(3010065, 800, 1, 1), //�ۺ캣̲������
Array(3010806, 800, 1, 1), //��ӣ������
Array(3010664, 800, 1, 1), //��������
//Array(3010662, 800, 1, 1), //���������
Array(3010659, 800, 1, 1), //��ʿ��վ����

Array(3010209, 800, 1, 1), //��ݱ�����±�����
Array(3010205, 800, 1, 1), //����¼��������
Array(3010511, 800, 1, 1), //è�乫԰����
Array(3014000, 800, 1, 1), //������������
Array(3010946, 200, 1, 1), //ɭ�ֻ��ҰӪ����
Array(3010402, 800, 1, 1), //�����ɶ���
Array(3010966, 800, 1, 1), //���鴬����
//Array(3012025, 5, 1, 1), //С�����ɴ�����
Array(3012024, 10, 1, 1), //ɳ̲��������
Array(3012019, 10, 1, 1), //���ٺ�����
Array(3012020, 250, 1, 1), //���ٻ�������
Array(3010690, 10, 1, 1), //���˷ɴ�����
//Array(3010681, 5, 1, 1), //�ش���������
//Array(3010670, 5, 1, 1), //����ָ������
//Array(3010660, 5, 1, 1), //�λù����Ǳ�����
//Array(3010658, 5, 1, 1), //��������

Array(3010014, 400, 1, 1), //������
Array(3010018, 400, 1, 1), //Ҭ����ɳ̲��
Array(3010019, 400, 1, 1), //��˾��
Array(3010021, 400, 1, 1), //ůů��
Array(3010025, 400, 1, 1), //��Ҷ�����
Array(3010028, 400, 1, 1), //�����ķ�²
			Array(3010044,300,1,1), //ͬһ��ɡ��
			Array(3010036,300,1,1), //��ǧ
			Array(3010049,400,1,1), //ѧ����
			Array(3010110,400,1,1), //��
			Array(3010131,400,1,1), //��è
			Array(1022129,400,1,1), //�۾�
			Array(3012001,400,1,1), //���� 
			Array(3012002,400,1,1), //ԡͰ
			Array(3012003,400,1,1), //����
			Array(3010021,400,1,1), //ůů��
			Array(3010024,400,1,1), //�����
			Array(3010025,400,1,1), //5�����Ҷ����
			Array(3010026,400,1,1), //���鸽��
			Array(3010034,400,1,1), //���ں�
			Array(3010035,400,1,1), //������
			Array(3010043,400,1,1), //ħŮɨ��
			Array(3010051,400,1,1), //ɳĮ����1
			Array(3010052,400,1,1), //ɳĮ����2
			Array(3010054,400,1,1), //���ല
			Array(3010057,400,1,1), //Ѫɫõ��
			Array(3010058,400,1,1), //����ĩ��
			Array(3010063,400,1,1), //��������
			Array(3010068,400,1,1), //¶ˮ����
			Array(3010069,400,1,1), //��Ʒ�
			Array(3010071,400,1,1), //��������
			Array(3010075,400,1,1), //���ֿ�

			Array(3010079,400,1,1), //��è
			Array(3010096,400,1,1), //������ʯ
		    Array(3010109,400,1,1), //ů¯����
			Array(3010110,400,1,1), //����
			Array(3010129,400,1,1), //��������
			Array(3010139,400,1,1), //˽�ܿռ�
			Array(3010140,400,1,1), //���տ���
			Array(3010147,400,1,1), //��������
			Array(3010149,400,1,1), //����
			Array(3010151,400,1,1), //���˵�

			Array(3010169,400,1,1), //������
			Array(3010172,400,1,1), //�ǿ�����
			Array(3010175,400,1,1), //����������
			Array(3010193,400,1,1), //����ƿ
			Array(3010195,400,1,1), //�޼�֮��
	
			Array(3010289,400,1,1), //�����̶�ͨ��
			Array(3010293,400,1,1), //��������
			Array(3010403,400,1,1), //���ֻ�
			Array(3010410,400,1,1), //����
			Array(3010411,400,1,1), //˫��
			Array(3010412,400,1,1), //˫��
			Array(3010428,400,1,1), //ˮ��
			Array(3010437,400,1,1), //ħ����
			Array(3010438,400,1,1), //����
			Array(3010453,400,1,1), //����
			Array(3010454,400,1,1), //�����ƶ�
			Array(3010462,400,1,1), //����̨
		
			Array(3010505,400,1,1), //������
			Array(3010515,400,1,1), //��ʯ����
			Array(3010609,400,1,1), //����������
			Array(3010622,400,1,1), //����
			Array(3010632,400,1,1), //ӡ�ڰ�
			Array(3010659,400,1,1), //��ʿ
			Array(3010716,400,1,1), //����Ģ��
			Array(3010729,400,1,1), //�¶�����
			Array(3010730,400,1,1), //С���ϳ���
			Array(3010733,400,1,1), //��������
			Array(3010738,400,1,1), //����������
			Array(3010739,400,1,1), //ѩ���㲨
			Array(3010753,400,1,1), //õ������
			Array(3010767,400,1,1), //ѩ������
			Array(3010760,400,1,1), //�Ŵ�ԡ��

			Array(3010937,400,1,1), //���
			Array(3010938,400,1,1), //���
			Array(3010939,400,1,1), //���
			Array(3010946,400,1,1), //ɭ�ֻ��
			Array(3012007,400,1,1), //ʯʨ
			Array(3012008,400,1,1), //��������
			Array(3012011,400,1,1), //���
			Array(3012022,400,1,1), //��˾
			Array(3015053,400,1,1), //������
			Array(3015120,400,1,1), //��ͷ��ս
			Array(3015264,400,1,1), //��ζ����
			//Array(3015158,400,1,1), //ӡ�ڰ�
			//Array(3015158,400,1,1), //ӡ�ڰ�
			//Array(3015158,400,1,1), //ӡ�ڰ�
Array(3010029, 450, 1, 1), //������
Array(3010030, 450, 1, 1), //�ڻ���
Array(3010031, 450, 1, 1), //�컷��
Array(3010032, 450, 1, 1), //�ƻ���
Array(3010033, 450, 1, 1), //�̻���
Array(3010037, 450, 1, 1), //������
Array(3010044, 450, 1, 1), //ͬһ��ɡ��
Array(3012001, 450, 1, 1), //����
Array(3012002, 450, 1, 1), //ԡͰ
Array(3012003, 450, 1, 1), //��������
Array(3010012, 450, 1, 1), //��ʿ ����
Array(3010025, 450, 1, 1), //��Ҷ�����
Array(3010037, 450, 1, 1), //������
Array(3010038, 450, 1, 1), //��������
Array(3010040, 450, 1, 1), //������
Array(3010041, 450, 1, 1), //��������
Array(3010043, 450, 1, 1), //ħŮ�ķ�ɨ��
Array(3010044, 450, 1, 1), //ͬһ��ɡ��
Array(3010045, 450, 1, 1), //��������
Array(3010046, 450, 1, 1), //������
Array(3010047, 400, 1, 1), //������
Array(3010048, 400, 1, 1), //ʥ��������
Array(3010049, 400, 1, 1), //ѩ����
Array(3010050, 400, 1, 1), //������
Array(3010057, 400, 1, 1), //Ѫɫõ��
Array(3010058, 400, 1, 1), //����ĩ��
Array(3010068, 400, 1, 1), //¶ˮ����
Array(3010071, 425, 1, 1), //������
Array(3010096, 425, 1, 1), //������ʯ����
Array(3010095, 425, 1, 1), //ʯͷ������
Array(3010094, 415, 1, 1), //ƯƯ������
Array(3010098, 425, 1, 1), //����լ��
Array(3010106, 425, 1, 1), //ѩ��ս��
Array(3010112, 425, 1, 1), 
Array(3010000,100,1,1),
//Array(3015177,100,1,1),
Array(3010001,100,1,1),
Array(3010002,100,1,1),
Array(3010003,100,1,1),
Array(3010004,100,1,1),
Array(3010005,100,1,1),
Array(3010006,100,1,1),
Array(3010007,100,1,1),
Array(3010008,100,1,1),
Array(3010009,100,1,1),
Array(3010010,100,1,1),
Array(3010012,100,1,1),
Array(3010013,100,1,1),
Array(3010014,100,1,1),

Array(3010016,100,1,1),
Array(3010017,100,1,1),
Array(3010018,100,1,1),
Array(3010848,100,1,1),//���̺���˹�
Array(3010849,100,1,1),//��������
//Array(3010983,100,1,1),
Array(3010019,100,1,1),
//Array(3010999,100,1,1),
//Array(3010984,100,1,1),
Array(3010021,100,1,1),
Array(3010024,100,1,1),
Array(3010025,100,1,1),
Array(3010026,100,1,1),
Array(3010028,100,1,1),
Array(3010029,100,1,1),

Array(3010030,100,1,1),
Array(3010031,100,1,1),
Array(3010032,100,1,1),
Array(3010033,100,1,1),
Array(3010034,100,1,1),
Array(3010035,100,1,1),
Array(3010036,100,1,1),
Array(3010037,100,1,1),
Array(3010038,100,1,1),
Array(3010039,100,1,1),
Array(3010040,100,1,1),
Array(3010041,100,1,1),

Array(3010043,100,1,1),
Array(3010044,100,1,1),
Array(3010045,100,1,1),
Array(3010046,100,1,1),
Array(3010047,100,1,1),
Array(3010048,100,1,1),
Array(3010049,100,1,1),
Array(3010050,100,1,1),
Array(3010051,100,1,1),
Array(3010052,100,1,1),
Array(3010053,100,1,1),
Array(3010054,100,1,1),

Array(3010055,100,1,1),
Array(3010057,100,1,1),
Array(3010058,100,1,1),
Array(3010059,100,1,1),
Array(3010060,100,1,1),
Array(3010061,100,1,1),
Array(3010062,100,1,1),
Array(3010063,100,1,1),
Array(3010064,100,1,1),
Array(3010065,100,1,1),
Array(3010066,100,1,1),
Array(3010067,100,1,1),
Array(3010068,100,1,1),
Array(3010069,100,1,1),
Array(3010071,100,1,1),


Array(3010106,100,1,1),//������
Array(3010107,100,1,1),
Array(3010108,100,1,1),
Array(3010109,100,1,1),
Array(3010110,100,1,1),
Array(3010111,100,1,1),
Array(3010112,100,1,1),
Array(3010113,100,1,1),
Array(3010114,100,1,1),
Array(3010115,100,1,1),
Array(3010116,100,1,1),
Array(3010117,100,1,1),
Array(3010118,100,1,1),
Array(3010119,100,1,1),
Array(3010120,100,1,1),
Array(3010123,100,1,1),
//Array(3010124,100,1,1),
Array(3010125,100,1,1),
Array(3010126,100,1,1),
Array(3010127,100,1,1),
Array(3010128,100,1,1),
Array(3010129,100,1,1),
Array(3010130,100,1,1),


Array(3010131,100,1,1),
Array(3010132,100,1,1),
Array(3010133,100,1,1),
Array(3010134,100,1,1),
Array(3010135,100,1,1),
Array(3010136,100,1,1),
Array(3010137,100,1,1),
Array(3010138,100,1,1),
Array(3010139,100,1,1),
Array(3010140,100,1,1),
Array(3010141,100,1,1),
Array(3010142,100,1,1),
Array(3010144,100,1,1),
Array(3010145,100,1,1),
Array(3010146,100,1,1),
Array(3010147,100,1,1),
Array(3010149,100,1,1),
Array(3010151,100,1,1),
Array(3010152,100,1,1),
Array(3010154,100,1,1),
Array(3010155,100,1,1),
Array(3010156,100,1,1),
Array(3010157,100,1,1),
Array(3010161,100,1,1),
Array(3010162,100,1,1),
Array(3010163,100,1,1),



Array(3010197,100,1,1),
Array(3010199,100,1,1),
Array(3010200,100,1,1),
Array(3010201,100,1,1),
Array(3010202,100,1,1),
Array(3010203,100,1,1),
Array(3010205,100,1,1),
Array(3010206,100,1,1),
Array(3010207,100,1,1),
Array(3010208,100,1,1),
Array(3010209,100,1,1),
Array(3010210,100,1,1),
Array(3010211,100,1,1),
Array(3010212,100,1,1),
Array(3010215,100,1,1),
Array(3010216,100,1,1),
Array(3010217,100,1,1),
Array(3010218,100,1,1),
Array(3010219,100,1,1),
Array(3010220,100,1,1),
Array(3010221,100,1,1),
Array(3010222,100,1,1),
Array(3010223,100,1,1),



Array(3010224,100,1,1),
//Array(3010225,100,1,1),
Array(3010226,100,1,1),
Array(3010257,100,1,1),
Array(3010279,100,1,1),
Array(3010280,100,1,1),
Array(3010281,100,1,1),
Array(3010282,100,1,1),
Array(3010283,100,1,1),
Array(3010286,100,1,1),
Array(3010287,100,1,1),
Array(3010288,100,1,1),
Array(3010289,100,1,1),
Array(3010290,100,1,1),
Array(3010291,100,1,1),
Array(3010292,100,1,1),
Array(3010293,100,1,1),
Array(3010294,100,1,1),
Array(3010295,100,1,1),
Array(3010296,100,1,1),
Array(3010297,100,1,1),
Array(3010298,100,1,1),
Array(3010299,100,1,1),
Array(3010300,100,1,1),
Array(3010301,100,1,1),
Array(3010302,100,1,1),
Array(3010303,100,1,1),
Array(3010304,100,1,1),
Array(3010305,100,1,1),
Array(3010306,100,1,1),
Array(3010307,100,1,1),
Array(3010308,100,1,1),
Array(3010311,100,1,1),
Array(3010313,100,1,1),
Array(3010314,100,1,1),
Array(3010315,100,1,1),
Array(3010316,100,1,1),
Array(3010317,100,1,1),
Array(3010318,100,1,1),
Array(3010319,100,1,1),
Array(3010320,100,1,1),
Array(3010321,100,1,1),
Array(3010322,100,1,1),
Array(3010354,100,1,1),
Array(3010355,100,1,1),
Array(3010356,100,1,1),
Array(3010357,100,1,1),
Array(3010360,100,1,1),
Array(3010361,100,1,1),
Array(3010362,100,1,1),
Array(3010364,100,1,1),
Array(3010365,100,1,1),
Array(3010368,100,1,1),
Array(3010369,100,1,1),
Array(3010370,100,1,1),
Array(3010371,100,1,1),
Array(3010373,100,1,1),
Array(3010374,100,1,1),
Array(3010375,100,1,1),


Array(3010534,100,1,1),
Array(3010535,100,1,1),
Array(3010536,100,1,1),
Array(3010537,100,1,1),
Array(3010538,100,1,1),
Array(3010539,100,1,1),
Array(3010540,100,1,1),
Array(3010541,100,1,1),
Array(3010542,100,1,1),
Array(3010543,100,1,1),
Array(3010544,100,1,1),
Array(3010545,100,1,1),
Array(3010546,100,1,1),
Array(3010547,100,1,1),
Array(3010548,100,1,1),
Array(3010549,100,1,1),
Array(3010550,100,1,1),
Array(3010551,100,1,1),
Array(3010552,100,1,1),
Array(3010553,100,1,1),
Array(3010554,100,1,1),
Array(3010555,100,1,1),

Array(3010611,100,1,1),
Array(3010612,100,1,1),
Array(3010613,100,1,1),
Array(3012017,100,1,1),
Array(3010622,100,1,1),
Array(3010623,100,1,1),
Array(3010624,100,1,1),
Array(3010636,100,1,1),
Array(3010637,100,1,1),
Array(3010638,100,1,1),
Array(3010639,100,1,1),
Array(3010640,100,1,1),
Array(3010641,100,1,1),
Array(3010642,100,1,1),
Array(3010643,100,1,1),
Array(3010644,100,1,1),
Array(3010662,100,1,1),
Array(3010672,100,1,1),
Array(3010673,100,1,1),
Array(3010674,100,1,1),
Array(3010675,100,1,1),
Array(3010676,100,1,1),
Array(3010677,100,1,1),
Array(3010678,100,1,1),
Array(3010679,100,1,1),
Array(3010680,100,1,1),
Array(3010681,100,1,1),
Array(3010682,100,1,1),
Array(3010683,100,1,1),
Array(3010685,100,1,1),
Array(3010690,100,1,1),
Array(3010691,100,1,1),
Array(3010692,100,1,1),
Array(3010693,100,1,1),
Array(3010694,100,1,1),
Array(3010695,100,1,1),
Array(3010700,100,1,1),
Array(3010702,100,1,1),
Array(3010703,100,1,1),


Array(3010704,100,1,1),
Array(3010705,100,1,1),
Array(3010708,100,1,1),
Array(3010719,100,1,1),
Array(3010720,100,1,1),
Array(3010721,100,1,1),
Array(3010722,100,1,1),
Array(3010723,100,1,1),
Array(3010733,100,1,1),
Array(3010734,100,1,1),
Array(3010735,100,1,1),
//Array(3010742,100,1,1),
//Array(3010743,100,1,1),
Array(3010744,100,1,1),
Array(3010757,100,1,1),
Array(3010760,100,1,1),
Array(3010761,100,1,1),
Array(3010766,100,1,1),
Array(3010767,100,1,1),
Array(3014000,100,1,1),
Array(3014001,100,1,1),
Array(3014002,100,1,1),
Array(3014003,100,1,1),
Array(3014004,100,1,1),
Array(3014006,100,1,1),
Array(3015000,100,1,1),
Array(3015003,100,1,1),
Array(3015004,100,1,1),
Array(3015030,100,1,1),
Array(3015031,100,1,1),
Array(3015032,100,1,1),
Array(3015033,100,1,1),
Array(3015041,100,1,1),
Array(3015042,100,1,1),
Array(3015043,100,1,1),
Array(3015044,100,1,1),
Array(3015062,100,1,1),
Array(3015063,100,1,1),
Array(3015064,100,1,1),
Array(3010960,100,1,1),
Array(3010961,100,1,1),
Array(3010962,100,1,1),
//Array(3015048,100,1,1),
Array(3015049,100,1,1),
Array(3015050,100,1,1),
Array(3015061,100,1,1),
Array(3015081,100,1,1),
Array(3015082,100,1,1),
Array(3015083,100,1,1),
Array(3010493,100,1,1),
Array(3010500,100,1,1),
Array(3010501,100,1,1),
Array(3010502,100,1,1),
Array(3010503,100,1,1),



Array(3010804,100,1,1),
Array(3010810,100,1,1),
Array(3010811,100,1,1),
Array(3010812,100,1,1),
Array(3010814,100,1,1),
Array(3010815,100,1,1),
Array(3010835,100,1,1),
Array(3010836,100,1,1),
Array(3010837,100,1,1),
Array(3010838,100,1,1),
Array(3010844,100,1,1),
Array(3010852,100,1,1),
Array(3010854,100,1,1),
Array(3010789,100,1,1),
Array(3010790,100,1,1),
Array(3010791,100,1,1),
Array(3010792,100,1,1),
Array(3010793,100,1,1),
Array(3010795,100,1,1),
Array(3010794,100,1,1),
Array(3010799,100,1,1),
Array(3010714,100,1,1),
Array(3010732,100,1,1),
Array(3012019,100,1,1),
Array(3010813,100,1,1),
Array(3012020,100,1,1),
Array(3010820,100,1,1),
Array(3010806,100,1,1),
Array(3010842,100,1,1),


Array(3010903,100,1,1),
Array(3010904,100,1,1),
Array(3010905,100,1,1),
Array(3010906,100,1,1),
Array(3010907,100,1,1),
Array(3010908,100,1,1),
Array(3010909,100,1,1),
Array(3010910,100,1,1),
Array(3010911,100,1,1),
Array(3010912,100,1,1),
Array(3010913,100,1,1),
Array(3010914,100,1,1),
Array(3010915,100,1,1),
Array(3010916,100,1,1),
Array(3010917,100,1,1),
Array(3010918,100,1,1),
Array(3010919,100,1,1),
Array(3010920,100,1,1),
Array(3010921,100,1,1),
Array(3010922,100,1,1),
Array(3010923,100,1,1),
Array(3010947,100,1,1),

Array(3010948,100,1,1),
Array(3010936,100,1,1),
Array(3010894,100,1,1),
Array(3010747,100,1,1),
Array(3010748,100,1,1),
Array(3010750,100,1,1),
Array(3010966,100,1,1),
Array(3012026,100,1,1),
Array(3010862,100,1,1),
Array(3010863,100,1,1),
Array(3010878,100,1,1),
Array(3010941,100,1,1),
Array(3010942,100,1,1),
Array(3010943,100,1,1),
Array(3010946,100,1,1),
//Array(3010964,100,1,1),
Array(3010965,100,1,1),
Array(3010976,100,1,1),
Array(3010978,100,1,1),
Array(3010979,100,1,1),
Array(3010980,100,1,1),



Array(3015051,100,1,1),
Array(3015053,100,1,1),
Array(3015045,100,1,1),
Array(3015046,100,1,1),
Array(3015047,100,1,1),
Array(3010845,100,1,1),
Array(3015075,100,1,1),
Array(3015090,100,1,1),
Array(3015091,100,1,1),
Array(3015092,100,1,1),
Array(3015058,100,1,1),
Array(3015059,100,1,1),
Array(3015060,100,1,1),
Array(3010850,100,1,1),
Array(3010756,100,1,1),
Array(3015057,100,1,1),
Array(3015055,100,1,1),
Array(3015056,100,1,1),

Array(3015084,100,1,1),
Array(3015085,100,1,1),
Array(3015086,100,1,1),
Array(3015087,100,1,1),
Array(3015088,100,1,1),
Array(3015093,100,1,1),
Array(3015080,100,1,1),
Array(3012027,100,1,1),
Array(3015096,100,1,1),
Array(3015097,100,1,1),
Array(3015015,100,1,1),
Array(3015016,100,1,1),
Array(3015017,100,1,1),


Array(3015018,100,1,1),
Array(3015019,100,1,1),
Array(3015020,100,1,1),
Array(3015021,100,1,1),
Array(3015022,100,1,1),
Array(3015023,100,1,1),
Array(3015024,100,1,1),
Array(3015025,100,1,1),
Array(3015026,100,1,1),
Array(3012007,100,1,1),
Array(3012008,100,1,1),
Array(3010967,100,1,1),
Array(3010968,100,1,1),
Array(3010973,100,1,1),
Array(3010853,100,1,1),
Array(3015106,100,1,1),
Array(3015130,100,1,1),
Array(3015131,100,1,1),
Array(3014009,100,1,1),
Array(3015132,100,1,1),
Array(3015089,100,1,1),
Array(3015133,100,1,1),
Array(3015134,100,1,1),
Array(3015135,100,1,1),
Array(3015136,100,1,1),
Array(3015137,100,1,1),
Array(3015138,100,1,1),
Array(3015139,100,1,1),
Array(3015140,100,1,1),
Array(3015147,100,1,1),
Array(3015148,100,1,1),


Array(3015149,100,1,1),
Array(3015150,100,1,1),
Array(3015146,100,1,1),
Array(3016000,100,1,1),
Array(3015158,100,1,1),
Array(3015100,100,1,1),
Array(3015109,100,1,1),
Array(3015111,100,1,1),
Array(3015112,100,1,1),
Array(3015114,100,1,1),
Array(3015115,100,1,1),
Array(3015116,100,1,1),
Array(3015117,100,1,1),
Array(3015118,100,1,1),
Array(3015119,100,1,1),
//Array(3015120,100,1,1),
Array(3015155,100,1,1),
//Array(3015157,100,1,1),
Array(3015167,100,1,1),
//Array(3015168,100,1,1),
//Array(3015171,100,1,1),
Array(3015172,100,1,1),//��������
Array(3015173,100,1,1),
Array(3015174,100,1,1),//���ִ�αװ����


Array(3015175,100,1,1),
Array(3015143,100,1,1),
Array(3015144,100,1,1),
Array(3015142,100,1,1),
Array(3015183,100,1,1),
Array(3015193,100,1,1),
Array(3015197,100,1,1),
Array(3015211,100,1,1),
Array(3015129,100,1,1),
Array(3012028,100,1,1),
Array(3015182,100,1,1),
Array(3015224,100,1,1),
Array(3015225,100,1,1),
//Array(3015210,100,1,1),
Array(3015223,100,1,1),
Array(3015234,100,1,1),
Array(3015235,100,1,1),
Array(3015259,100,1,1),
Array(3015260,100,1,1),
Array(3015258,100,1,1),
Array(3015262,100,1,1),
Array(3015273,100,1,1),
Array(3015274,100,1,1),
Array(3015195,100,1,1),
Array(3015227,100,1,1),
Array(3015264,100,1,1),
Array(3015263,100,1,1),

Array(3015236,100,1,1),
Array(3015238,100,1,1),
Array(3015239,100,1,1),
Array(3015240,100,1,1),
Array(3015241,100,1,1),
Array(3015243,100,1,1),
Array(3015244,100,1,1),
Array(3015245,100,1,1),
Array(3015246,100,1,1),
Array(3015247,100,1,1),
Array(3015248,100,1,1),
Array(3015272,100,1,1),
Array(3015276,100,1,1),
Array(3015277,100,1,1),
Array(3015278,100,1,1),
Array(3015279,100,1,1),
Array(3015295,100,1,1),
Array(3015296,100,1,1),
Array(3015297,100,1,1),
Array(3015299,100,1,1),
Array(3015300,100,1,1),
Array(3015301,100,1,1),

Array(3015304,100,1,1),
Array(3012030,100,1,1),
Array(3015313,100,1,1),
Array(3015316,100,1,1),
Array(3016100,100,1,1),
Array(3015317,100,1,1),
Array(3015257,100,1,1),


Array(3015303,100,1,1),
Array(3010729,100,1,1),
Array(3015267,100,1,1),
Array(3015269,100,1,1),
Array(3016101,100,1,1),
Array(3015328,100,1,1),
Array(3015329,100,1,1),
Array(3015338,100,1,1),
Array(3015312,100,1,1),
Array(2070004, 400, 1, 1) //��ɫ��

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("�ټ��ð��͡�");
            cm.dispose();
        }
        status--;
    }
		if (status == 0) {
			if (cm.getPlayer().getNX() >= 5000) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("����#r5000#k��ȯ�����ȡ������Ʒ!\r\n#k������ȫ����Ʒ:" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("����#r5000#k��ȯ�����ȡ������Ʒ!\r\n#k������ȫ����Ʒ:" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 400+ Math.random()*5);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "ľľð�յ�ת����", notice);
            if (item != -1) {
				//cm.setmoneyb(-5);
cm.gainNX(-5000);//�����Ʒ
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
			//cm.gainNX(-1000);
           // cm.setmoneyb(-5);
//cm.gainItem(4001323, 5);//�����Ʒ
			//cm.gainNX(1000);	//�Ӽ���ȯ
            cm.safeDispose();
        }
    }
}















