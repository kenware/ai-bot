"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const nock_1 = __importDefault(require("nock"));
const server_1 = __importDefault(require("../src/server"));
const mock_1 = require("./mock");
const config_1 = __importDefault(require("../src/config"));
// Configure chai
chai_1.default.use(chai_http_1.default);
chai_1.default.should();
describe('Test visitors chat', () => {
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        nock_1.default.cleanAll();
    }));
    describe('POST /', () => {
        it('should get a reply from ai bot', (done) => {
            // Mock the external ai api for intent
            nock_1.default(config_1.default.intentEndpoint)
                .post('/intents', mock_1.validData)
                .reply(200, mock_1.intentData);
            chai_1.default.request(server_1.default)
                .post('/api/v1/visitor/message')
                .send(mock_1.validData)
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.message.should.be.eq(mock_1.validData.message);
                done();
            });
        }).timeout(5000);
        it('should return default message if confidence is lower than confidence threshold', (done) => {
            // Mock the external ai api for intent
            nock_1.default(config_1.default.intentEndpoint)
                .post('/intents', mock_1.validData)
                .reply(200, mock_1.intentDataWithLowThreshold);
            chai_1.default.request(server_1.default)
                .post('/api/v1/visitor/message')
                .send(mock_1.validData)
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.reply.should.be.eq('AI could not give the correct answer.');
                done();
            });
        }).timeout(5000);
        it('should return default message if the intent reply not found in the database', (done) => {
            // Mock the external ai api for intent
            nock_1.default(config_1.default.intentEndpoint)
                .post('/intents', mock_1.validData)
                .reply(200, mock_1.unrecognisedIntentName);
            chai_1.default.request(server_1.default)
                .post('/api/v1/visitor/message')
                .send(mock_1.validData)
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.reply.should.be.eq('AI could not give the correct answer.');
                done();
            });
        }).timeout(5000);
        it('test botId required', (done) => {
            chai_1.default.request(server_1.default)
                .post('/api/v1/visitor/message')
                .send({ message: 'new message' })
                .end((err, res) => {
                console.log(res.body);
                res.should.have.status(400);
                res.body.should.be.an('object');
                res.body.message.botId[0].should.be.eq('The botId field is required.');
                done();
            });
        }).timeout(5000);
        it('test message is required while interacting with bot', (done) => {
            chai_1.default.request(server_1.default)
                .post('/api/v1/visitor/message')
                .send({ botId: 'gfdbbb6677' })
                .end((err, res) => {
                console.log(res.body);
                res.should.have.status(400);
                res.body.should.be.an('object');
                res.body.message.message[0].should.be.eq('The message field is required.');
                done();
            });
        }).timeout(5000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvcnMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL3Zpc2l0b3JzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBd0I7QUFDeEIsMERBQWlDO0FBQ2pDLGdEQUF3QjtBQUN4QiwyREFBZ0M7QUFDaEMsaUNBSTJDO0FBQzNDLDJEQUFtQztBQUVuQyxpQkFBaUI7QUFDakIsY0FBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBUSxDQUFDLENBQUM7QUFDbkIsY0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWQsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUNoQyxNQUFNLENBQUMsR0FBUyxFQUFFO1FBRWQsY0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUN0QixFQUFFLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM1QyxzQ0FBc0M7WUFDdEMsY0FBSSxDQUFDLGdCQUFNLENBQUMsY0FBYyxDQUFDO2lCQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLGdCQUFTLENBQUM7aUJBQzNCLEtBQUssQ0FBQyxHQUFHLEVBQUUsaUJBQVUsQ0FBQyxDQUFDO1lBRXhCLGNBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQUcsQ0FBQztpQkFDZCxJQUFJLENBQUMseUJBQXlCLENBQUM7aUJBQy9CLElBQUksQ0FBQyxnQkFBUyxDQUFDO2lCQUNmLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxD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b3J0IGNoYWlIdHRwIGZyb20gJ2NoYWktaHR0cCc7XG5pbXBvcnQgbm9jayBmcm9tICdub2NrJztcbmltcG9ydCBhcHAgZnJvbSAnLi4vc3JjL3NlcnZlcic7XG5pbXBvcnQge1xuICAgIHZhbGlkRGF0YSxcbiAgICBpbnRlbnREYXRhLFxuICAgIGludGVudERhdGFXaXRoTG93VGhyZXNob2xkLFxuICAgIHVucmVjb2duaXNlZEludGVudE5hbWUgfSBmcm9tICcuL21vY2snO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9zcmMvY29uZmlnJztcblxuLy8gQ29uZmlndXJlIGNoYWlcbmNoYWkudXNlKGNoYWlIdHRwKTtcbmNoYWkuc2hvdWxkKCk7XG5cbmRlc2NyaWJlKCdUZXN0IHZpc2l0b3JzIGNoYXQnLCAoKSA9PiB7XG4gICAgYmVmb3JlKGFzeW5jICgpID0+IHtcbiAgICBcbiAgICAgICAgbm9jay5jbGVhbkFsbCgpO1xuICAgIH0pXG4gICAgXG4gICAgZGVzY3JpYmUoJ1BPU1QgLycsICgpID0+IHtcbiAgICAgIGl0KCdzaG91bGQgZ2V0IGEgcmVwbHkgZnJvbSBhaSBib3QnLCAoZG9uZSkgPT4ge1xuICAgICAgICAvLyBNb2NrIHRoZSBleHRlcm5hbCBhaSBhcGkgZm9yIGludGVudFxuICAgICAgICBub2NrKGNvbmZpZy5pbnRlbnRFbmRwb2ludClcbiAgICAgICAgLnBvc3QoJy9pbnRlbnRzJywgdmFsaWREYXRhKVxuICAgICAgICAucmVwbHkoMjAwLCBpbnRlbnREYXRhKTtcblxuICAgICAgICBjaGFpLnJlcXVlc3QoYXBwKVxuICAgICAgICAgIC5wb3N0KCcvYXBpL3YxL3Zpc2l0b3IvbWVzc2FnZScpXG4gICAgICAgICAgLnNlbmQodmFsaWREYXRhKVxuICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICByZXMuc2hvdWxkLmhhdmUuc3RhdHVzKDIwMCk7XG4gICAgICAgICAgICByZXMuYm9keS5zaG91bGQuYmUuYW4oJ29iamVjdCcpO1xuICAgICAgICAgICAgcmVzLmJvZHkubWVzc2FnZS5zaG91bGQuYmUuZXEodmFsaWREYXRhLm1lc3NhZ2UpXG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KS50aW1lb3V0KDUwMDApO1xuXG4gICAgICBpdCgnc2hvdWxkIHJldHVybiBkZWZhdWx0IG1lc3NhZ2UgaWYgY29uZmlkZW5jZSBpcyBsb3dlciB0aGFuIGNvbmZpZGVuY2UgdGhyZXNob2xkJywgKGRvbmUpID0+IHtcbiAgICAgICAgLy8gTW9jayB0aGUgZXh0ZXJuYWwgYWkgYXBpIGZvciBpbnRlbnRcbiAgICAgICAgbm9jayhjb25maWcuaW50ZW50RW5kcG9pbnQpXG4gICAgICAgIC5wb3N0KCcvaW50ZW50cycsIHZhbGlkRGF0YSlcbiAgICAgICAgLnJlcGx5KDIwMCwgaW50ZW50RGF0YVdpdGhMb3dUaHJlc2hvbGQpO1xuXG4gICAgICAgIGNoYWkucmVxdWVzdChhcHApXG4gICAgICAgICAgLnBvc3QoJy9hcGkvdjEvdmlzaXRvci9tZXNzYWdlJylcbiAgICAgICAgICAuc2VuZCh2YWxpZERhdGEpXG4gICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIHJlcy5zaG91bGQuaGF2ZS5zdGF0dXMoMjAwKTtcbiAgICAgICAgICAgIHJlcy5ib2R5LnNob3VsZC5iZS5hbignb2JqZWN0Jyk7XG4gICAgICAgICAgICByZXMuYm9keS5yZXBseS5zaG91bGQuYmUuZXEoJ0FJIGNvdWxkIG5vdCBnaXZlIHRoZSBjb3JyZWN0IGFuc3dlci4nKVxuICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSkudGltZW91dCg1MDAwKTtcblxuICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gZGVmYXVsdCBtZXNzYWdlIGlmIHRoZSBpbnRlbnQgcmVwbHkgbm90IGZvdW5kIGluIHRoZSBkYXRhYmFzZScsIChkb25lKSA9PiB7XG4gICAgICAgIC8vIE1vY2sgdGhlIGV4dGVybmFsIGFpIGFwaSBmb3IgaW50ZW50XG4gICAgICAgIG5vY2soY29uZmlnLmludGVudEVuZHBvaW50KVxuICAgICAgICAucG9zdCgnL2ludGVudHMnLCB2YWxpZERhdGEpXG4gICAgICAgIC5yZXBseSgyMDAsIHVucmVjb2duaXNlZEludGVudE5hbWUpO1xuICAgICAgICBjaGFpLnJlcXVlc3QoYXBwKVxuICAgICAgICAgIC5wb3N0KCcvYXBpL3YxL3Zpc2l0b3IvbWVzc2FnZScpXG4gICAgICAgICAgLnNlbmQodmFsaWREYXRhKVxuICAgICAgICAgIC5lbmQoKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICByZXMuc2hvdWxkLmhhdmUuc3RhdHVzKDIwMCk7XG4gICAgICAgICAgICByZXMuYm9keS5zaG91bGQuYmUuYW4oJ29iamVjdCcpO1xuICAgICAgICAgICAgcmVzLmJvZHkucmVwbHkuc2hvdWxkLmJlLmVxKCdBSSBjb3VsZCBub3QgZ2l2ZSB0aGUgY29ycmVjdCBhbnN3ZXIuJylcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pLnRpbWVvdXQoNTAwMCk7XG5cbiAgICAgIGl0KCd0ZXN0IGJvdElkIHJlcXVpcmVkJywgKGRvbmUpID0+IHtcbiAgICAgICAgY2hhaS5yZXF1ZXN0KGFwcClcbiAgICAgICAgICAucG9zdCgnL2FwaS92MS92aXNpdG9yL21lc3NhZ2UnKVxuICAgICAgICAgIC5zZW5kKHsgbWVzc2FnZTogJ25ldyBtZXNzYWdlJ30pXG4gICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KVxuICAgICAgICAgICAgcmVzLnNob3VsZC5oYXZlLnN0YXR1cyg0MDApO1xuICAgICAgICAgICAgcmVzLmJvZHkuc2hvdWxkLmJlLmFuKCdvYmplY3QnKTtcbiAgICAgICAgICAgIHJlcy5ib2R5Lm1lc3NhZ2UuYm90SWRbMF0uc2hvdWxkLmJlLmVxKCdUaGUgYm90SWQgZmllbGQgaXMgcmVxdWlyZWQuJylcbiAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pLnRpbWVvdXQoNTAwMCk7XG4gICAgXG4gICAgICBpdCgndGVzdCBtZXNzYWdlIGlzIHJlcXVpcmVkIHdoaWxlIGludGVyYWN0aW5nIHdpdGggYm90JywgKGRvbmUpID0+IHtcbiAgICAgICAgY2hhaS5yZXF1ZXN0KGFwcClcbiAgICAgICAgICAucG9zdCgnL2FwaS92MS92aXNpdG9yL21lc3NhZ2UnKVxuICAgICAgICAgIC5zZW5kKHsgYm90SWQ6ICdnZmRiYmI2Njc3J30pXG4gICAgICAgICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5ib2R5KVxuICAgICAgICAgICAgcmVzLnNob3VsZC5oYXZlLnN0YXR1cyg0MDApO1xuICAgICAgICAgICAgcmVzLmJvZHkuc2hvdWxkLmJlLmFuKCdvYmplY3QnKTtcbiAgICAgICAgICAgIHJlcy5ib2R5Lm1lc3NhZ2UubWVzc2FnZVswXS5zaG91bGQuYmUuZXEoJ1RoZSBtZXNzYWdlIGZpZWxkIGlzIHJlcXVpcmVkLicpXG4gICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KS50aW1lb3V0KDUwMDApO1xuICAgIH0pO1xufSk7XG4iXX0=