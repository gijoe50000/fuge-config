/*
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES LOSS OF USE, DATA, OR PROFITS OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

'use strict'

var path = require('path')
var test = require('tap').test
var loader = require('../index.js')()


test('good external DNS', function (t) {
  t.plan(2)

  var expected = require(path.join(__dirname, '/expectedResults/externalDns.json'))
  loader.load(path.join(__dirname, '/fixture/externalDns.yml'), function (err, system) {
    t.equal(null, err, 'check err is null')
    t.deepEqual(system, expected, 'check system matches expected')
  })
})


test('bad external DNS', function (t) {
  t.plan(2)

  var expected = require(path.join(__dirname, '/expectedResults/externalDnsBad.json'))
  loader.load(path.join(__dirname, '/fixture/externalDnsBad.yml'), function (err, system) {
    t.equal(null, err, 'check err is null')
    t.deepEqual(system, expected, 'check system matches expected')
  })
})

